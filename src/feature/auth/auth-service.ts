/* eslint-disable @typescript-eslint/no-var-requires */
import { ClientTypes } from './enums/client-types';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LoginViaEmailOrPhoneRequestDTO } from "./dto/request/login-via-email-phone.request";
import * as _ from "lodash";
import { appConfig } from "./../../core/config/app-config";
import {
  Injectable,
  Inject,
  Logger,
  LoggerService,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGraphRepo } from "./repository/auth-graphql-repository";
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import * as bcrypt from "bcrypt";
import * as uuid from "uuid";

import { ApiResponseStatus } from "./../../shared/enumeration/response-status";
import { User } from "./schema/app-user";
import {
  LoginResponseDTO,
} from "./dto/response/login.response";
import { isAfter, addMinutes,  } from "date-fns";
import { BaseResponse } from "./../../shared/interface/base-response";

import { sendMail } from "../messaging/send-email";
import { FcmTokenInput } from "./dto/request/fcm-token";
const axios = require('axios');
const csv = require("csv-parser");
import * as EmailTemplates from '../constants/messages';
import { generateLocalPassword, generateOtp } from 'feature/utils/generate-password';
const ejs = require('ejs');

@Injectable()
export class AuthLoginService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly jwtService: JwtService,
    private readonly firebase_auth_service: FirebaseAuthenticationService,
    private authGraphRepo: AuthGraphRepo
  ) {}

  /* ------------------------- Verifying User,Role And Blocked Status------------------------ */
  async verifyUser(
    emailOrPhone: string,
    type: string
  ): Promise<{ appUser: User; errorResponse?: any }> {
    let response;
    const emailRegex = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const phoneRegex = new RegExp(
      /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
    );
    const email = emailRegex.test(emailOrPhone) ? emailOrPhone : null;
    const phoneNo = phoneRegex.test(emailOrPhone) ? emailOrPhone : null;
    const table = this.getTable(type);
    if (email) {
      response = await this.authGraphRepo.findUserWithEmail(email, table);
    } else if (phoneNo) {
      response = await this.authGraphRepo.findUserWithPhone(phoneNo, table);
    } else {
      throw new HttpException(
        {
          status: ApiResponseStatus.FAILURE,
          message: "Enter Valid Email Or Phone",
        },
        HttpStatus.BAD_REQUEST
      );
    }
    const currentUser = response.data[table][0];
    console.log('currentUser');
    console.log(JSON.stringify(currentUser, null, 4));
    if (!currentUser) {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "User does not exist" },
        HttpStatus.UNAUTHORIZED
      );
    }
    if (currentUser.status == 'BLOCKED') {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Account Blocked. Please contact admin" },
        HttpStatus.UNAUTHORIZED
      );
    }

    // console.log(currentUser);

    return { appUser: currentUser };
  }

  getTable(type){

    if(type === ClientTypes.PRACTICE) {
      return 'dental_practices'
    }

    if(type === ClientTypes.PROFESSIONAL) {
      return 'dental_professionals'
    }

    if(type === ClientTypes.SUPPLIER) {
      return 'dental_suppliers'
    }

    if(type === ClientTypes.ADMIN){
      return 'admin_users'
    }

  }

	getType(type) {
		if (type === ClientTypes.PRACTICE) {
			return 'dental_practice_id';
		}

		if (type === ClientTypes.PROFESSIONAL) {
			return 'dental_professional_id';
		}

		if (type === ClientTypes.SUPPLIER) {
			return 'dental_supplier_id';
		}

	}


  
  /* --------------------------- Login  Via Email--------------------------- */

  async loginViaRoleEmail(
    loginViaEmailOrPhoneRequestDTO: LoginViaEmailOrPhoneRequestDTO,
    type: string
  ): Promise<LoginResponseDTO> {
    const response = await this.verifyUser(
      loginViaEmailOrPhoneRequestDTO.emailOrPhone,
      type
    );
    const currentUser = response.appUser;
    const passwordMatch = await bcrypt.compare(
      loginViaEmailOrPhoneRequestDTO.password,
      currentUser.password
    );
    if (passwordMatch) {
      return this.createTokens({ ...currentUser}, type);
    }
    throw new HttpException(
      { status: ApiResponseStatus.FAILURE, message: "Password Mismatch" },
      HttpStatus.UNAUTHORIZED
    );
  }

  /* --------------------------- Refresh Token--------------------------- */
  async refreshToken(refreshToken: string): Promise<LoginResponseDTO> {
    try {
      const token = this.jwtService.verify(refreshToken, {
        issuer: appConfig.ACCESS_TOKEN_ISSUER,
      });
      const response = await this.verifyUser(token.email, token.type);
      const date = new Date(0);
      date.setUTCSeconds(token.exp);
      if (isAfter(new Date(), date)) {
        throw new HttpException(
          { status: ApiResponseStatus.FAILURE, message: "Session Expired" },
          HttpStatus.UNAUTHORIZED
        );
      }
      return this.createTokens(response.appUser, token.type);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Server Error" },
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  /* ----------------------------- Forget Password ---------------------------- */
  async forgetPassword(email: string, type: string): Promise<BaseResponse> {
    // Getting User Info
    const tableName = this.getTable(type);
    const users = await this.authGraphRepo.findUserWithEmail(email, tableName);
    const user = users.data[tableName][0];
    if (!user) {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Email Doesn't Exits" },
        HttpStatus.CONFLICT
      );
    }

    // Saving Reset Request
    const passwordKey = uuid.v4();
    const passwordExpiry = addMinutes(new Date(), 30);
    const resetRequest = await this.authGraphRepo.forgetPassword(
      user.id,
      passwordKey,
      passwordExpiry,
      this.getTable(type)
    );
    console.log(resetRequest);
    this.sendEmail(email, passwordKey,type);
    return {
      status: ApiResponseStatus.SUCCESS,
      message: "Message Sent Successfully",
    };
  }

  async sendVerifyOtp(email: string, type: string): Promise<BaseResponse> {
    const table = this.getTable(type);
    // Getting User Info
    const users = await this.authGraphRepo.findUserWithEmail(email, table);
    // console.log('users');
    // console.log(JSON.stringify(users, null, 4));

    const user = users.data[table][0];
    if (!user) {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Email Doesn't Exits" },
        HttpStatus.CONFLICT
      );
    }

    // Saving Reset Request
    const phone_verification_key = generateOtp();
    const phone_verification_expiry_at  = addMinutes(new Date(), 30);
    const resetRequest = await this.authGraphRepo.sendVerifyOtp(
      user.id,
      phone_verification_key,
      phone_verification_expiry_at,
      table
    );
    // console.log(resetRequest);
    const html = EmailTemplates.verifyOTPBody.replace(/{{OTP}}/gi,phone_verification_key);

    const message = {
      email, // list of receivers
      subject: EmailTemplates.verifyOTPSubject, // Subject line
      text: EmailTemplates.verifyOTPSubject, // plain text body
      html,
    };

    await sendMail(message.email,message.subject,message.text,message.html);
    return {
      status: ApiResponseStatus.SUCCESS,
      message: "Message Sent Successfully",
    };
  }

  async verifyOtp(
    email: string,
    otp: string,
    type: string
  ): Promise<BaseResponse> {
    const table = this.getTable(type);
    const users = await this.authGraphRepo.findUserWithEmail(email, table);
   
    const user = users.data[table][0];
    console.log('users');
    console.log(JSON.stringify(user, null, 4));
    if (!user) {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "email Doesn't Exits" },
        HttpStatus.CONFLICT
      );
    }

    if(user.phone_verification_key == otp) {
      const res = await this.authGraphRepo.verifyOTP(email,table);
      console.log('res');
      console.log(JSON.stringify(res, null, 4));
    } else {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Otp did not match" },
        HttpStatus.CONFLICT
      );
    }
    
    return {
      status: ApiResponseStatus.SUCCESS,
      message: "OTP verifcation Successful",
    };
  }

  
  async changePassword(password: string, userId: string, type: string): Promise<BaseResponse> {

    try {
      // Getting User Info
      const cryptedPassword = await bcrypt.hash(password, appConfig.BCRYPT_SALT);

      await this.authGraphRepo.updatePasswordByUserId(
        userId,
        cryptedPassword,
        this.getTable(type)
      );
      return {
        status: ApiResponseStatus.SUCCESS,
        message: "Password Changed Successfully",
      };
    } catch (error) {
      return {
        status: ApiResponseStatus.FAILURE,
        message: "Couldn't change password",
      };
    }
  }

  // Send Email For ForgetPassword
  async sendEmail(email: string, requestId: string,type: string) {
    // const html = `
    //     Please Click On The Link Below To Reset Your Password;
    //     <br>
    //     <a href="${appConfig.DOMAIN}/api/v1/auth/reset-template/${requestId}/${type}">Reset Password</a>
    //     <br>
    //     This Link Valid Only For 30 Minutes
    //     `;

    const html = EmailTemplates.forgotPasswordBody.replace(/{{requestId}}/gi, requestId).replace(/{{type}}/gi, type);

    const message = {
      email, // list of receivers
      subject: EmailTemplates.forgotPasswordSubject, // Subject line
      text: EmailTemplates.forgotPasswordSubject, // plain text body
      html,
    };
    return sendMail(message.email,message.subject,message.text,message.html); 
    // await this.queueService.enqueue(QueueName.sendDentalEmail, message);
  }

  /* ----------------------------- Reset Password ----------------------------- */
  async resetPassword(
    resetId: string,
    password: string,
    type: string
  ): Promise<BaseResponse> {
    const cryptedPassword = await bcrypt.hash(password, appConfig.BCRYPT_SALT);

    console.log(resetId,password,type);

    const table = this.getTable(type);

    const response = await this.authGraphRepo.updatePassword(
      resetId,
      cryptedPassword,
      new Date(),
      table
    );
    
    if (response.data[`update_${table}`].returning.length === 0) {
      return {
        status: ApiResponseStatus.FAILURE,
        message: "Session Expired Please Request Password Again",
      };
    }
    return {
      status: ApiResponseStatus.SUCCESS,
      message: "Password Reset Successful",
    };
  }

  /* --------------------------- Login  Via Firebase Token --------------------------- */
  async loginViaFirebaseToken(
    token: string,
    type: string
  ): Promise<LoginResponseDTO> {
    // Decoding Token
    try {
      const decodedToken = await this.firebase_auth_service.verifyIdToken(token, false);
      const table = this.getTable(type);
      
      // Getting User Info By Firebase Id
      const response = decodedToken.email ? await this.authGraphRepo.findUserWithEmail(decodedToken.email,table) :
      await this.authGraphRepo.findUserWithPhone(decodedToken.phone_number,this.getTable(type));

      const user = response?.data?.[table][0];

      // If User Doesn't Exists Create User
      if (!user) {
        throw new NotFoundException("User not found with firebase Id");
      }
      // Creating Token And Response
      return this.createTokens(user, type);
    } catch (err) {
      console.log(err);
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Unable To Register" },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Generating Jwt Tokens
  async createTokens(userDetails: any, type: string): Promise<LoginResponseDTO> {

    // TODO : Need to give current role
    const currentRole = type;
    const allowedRoles = [currentRole];

    const hasuraClaims = {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": currentRole,
        "x-hasura-allowed-roles": allowedRoles, // Add All Roles
        "x-hasura-user-id": userDetails.id,
        "x-hasura-status": userDetails.status,
        // "x-hasura-type": type,
        "x-hasura-profile-completed": `${userDetails.profile_completed}`,
      },
    };
    
    const loginResponseDTO = new LoginResponseDTO();
    loginResponseDTO.id = userDetails.id;
    loginResponseDTO.name = userDetails.name;
    loginResponseDTO.email = userDetails.email;
    loginResponseDTO.status = userDetails.status;
    loginResponseDTO.profile_image = userDetails.profile_image;
    loginResponseDTO.type = type;
    loginResponseDTO.profile_completed = userDetails.profile_completed;
    loginResponseDTO.phone = userDetails.phone;
    loginResponseDTO.logo = userDetails.logo;

    loginResponseDTO.address = userDetails.address;
    loginResponseDTO.directory_category_id = userDetails.directory_category_id;
    loginResponseDTO.profession_type = userDetails.profession_type;
    loginResponseDTO.second_hand = userDetails.second_hand;
    loginResponseDTO.business_name = userDetails.business_name;
    loginResponseDTO.abn_number = userDetails.abn_number;
    loginResponseDTO.gender = userDetails.gender;
    loginResponseDTO.sell_products  = userDetails.sell_products;

    if(type != ClientTypes.ADMIN) {
      const dashboardPermissionsData = await this.authGraphRepo.getDashboardPermission(userDetails.id,this.getType(type));
      loginResponseDTO.dashboard_permissions = dashboardPermissionsData.data.user_subscriptions[0]?.subscription_plan.dashboard_permissions ?? null;
    }

    if(type != ClientTypes.ADMIN) {
      const subscriptionDetails = await this.authGraphRepo.getUserSubscriptions(userDetails.id,this.getType(type));
      const subscription = subscriptionDetails.data.user_subscriptions[0];
      loginResponseDTO.subscription_id = subscription?.id;
      loginResponseDTO.plan_id = subscription?.subscription_plan_id;
      loginResponseDTO.payment_status = subscription?.payment_status;
    }

    const userJWTDetails = _.omit(userDetails, [
      "date_of_birth",
      "profile_completed",
      "profile_image",
      "j_auth_roles_users",
      "password",

      "phone_verification_key",
      "phone_verification_expiry_at",
      "phone",
      "logo",
      "address",
      "directory_category_id",
      "profession_type",
      "second_hand",
      "business_name",
      "abn_number",
      "gender",
      "sell_products",
    ]);
    
    loginResponseDTO.accessToken = this.jwtService.sign(
      { ...userJWTDetails, ...hasuraClaims,type },
      {
        algorithm: "HS256",
        keyid: appConfig.ACCESS_TOKEN_SECRET,
        expiresIn: appConfig.ACCESS_TOKEN_EXPIRY,
        issuer: appConfig.ACCESS_TOKEN_ISSUER,
      }
    );
    loginResponseDTO.refreshToken = this.jwtService.sign(
      { ...userJWTDetails, ...hasuraClaims,type },
      {
        algorithm: "HS256",
        keyid: appConfig.ACCESS_TOKEN_SECRET,
        expiresIn: appConfig.REFRESH_TOKEN_EXPIRY,
        issuer: appConfig.ACCESS_TOKEN_ISSUER,
      }
    );
    return loginResponseDTO;
  }

  async addFcmToken(object: FcmTokenInput, type: string): Promise<any> {
    const res = await this.authGraphRepo.addFcmToken(object, this.getTable(type));
    return res.data;
  }
  
  async checkSupplyVariants(ids: Array<string>): Promise<any> {
    const res = await this.authGraphRepo.checkSupplyVariants(ids);
    return res.data;
  }

  // {
  //   "categoryId":"categoryId",
  //   "subCategoryId":"subCategoryId",
  //   "brandId":"brandId",
  //   "csvUrl":{
  //     "url":"categoryId"
  //   }
  // }

  async importDetails(importDetails: any): Promise<any> {

		const categoryId = importDetails.categoryId;
		const subCategoryId = importDetails.subCategoryId;
		const brandId = importDetails.brandId;
		const dental_suppliers_id = importDetails.supplierId;

		const details = [];
		let csvStream;
	
		// Fetching Csv Via Url
		try {
		  csvStream = await axios({
			method: "get",
			url: importDetails.csvUrl.url,
			responseType: "stream",
		  });
		} catch (err) {
		  console.log(err);
		  throw new HttpException(
			{ message: "Something Went Wrong Please Try Again Later", err },
			HttpStatus.INTERNAL_SERVER_ERROR
		  );
		}
	
		// Reading Details in Csv
		for await (const user of csvStream.data.pipe(csv())) {
		  details.push(user);
		}
		console.log('details');
		console.log(JSON.stringify(details, null, 4));
		 return this.addProductCsv(details,categoryId,subCategoryId,brandId,dental_suppliers_id);
	
	}

	async addProductCsv(products:any,categoryId,subCategoryId,brandId,dental_suppliers_id) {

		const allRecords = [];

		products.forEach(item => {

			const payload = {
				name : item.productName,
				short_info : item.shortInfo,
				supply_category_id : categoryId,
				supply_sub_category_id : subCategoryId,
				supply_brand_id : brandId,
        dental_suppliers_id,
				// is_featured : item.status.toLowerCase() == 'true',
				sku : item.sku,
				specifications : item.specifications,
				supply_variants : {
					data : [
						{
							title : item.variantName,
							actual_price : Number(item.actualPrice),
							selling_price : Number(item.sellingPrice),
							available_stock : Number(item.availableStock),
							status : item.variantStatus,
							price_unit : item.priceUnit,
							sku_code : item.sku,
						}
					]
				}
			}

		allRecords.push(payload);

		});
	
		const res = await this.authGraphRepo.addSupplies(allRecords);
    console.log('res');
    console.log(JSON.stringify(res, null, 4));

    return res;

	}

}
