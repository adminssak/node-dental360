/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BaseResponse } from './../../../shared/interface/base-response';
import { FirebaseLoginResponseDTO, LoginResponseDTO } from './../dto/response/login.response';
import { RefreshTokenRequestDTO } from './../dto/request/refresh-token.request';
import { LoginViaEmailOrPhoneRequestDTO } from './../dto/request/login-via-email-phone.request';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param, Res, Req, HttpException, HttpStatus } from '@nestjs/common';
import { AuthLoginService } from '../auth-service';
import { ForgetPasswordDTO } from '../dto/request/forget-password.request';
import { appConfig } from '../../../core/config/app-config';
import { Response } from 'express';
import format = require('date-fns/format');

@ApiTags('auth')
@Controller({ path: '/auth' })
export class AuthController {
	constructor(private service: AuthLoginService) {}

	@Post('/login-via-email-or-phone')
	@ApiOkResponse({
		description: 'Login Via Email Or Phone',
		type: LoginViaEmailOrPhoneRequestDTO
	})
	loginViaEmailOrPhone(@Body() body: any): Promise<LoginResponseDTO> {
		// console.log('body');
		// console.log(JSON.stringify(body, null, 4));
		
		return this.service.loginViaRoleEmail(body.input.details, body.input.details.type);
	}

	@Post('/refresh-token')
	@ApiOkResponse({
		description: 'Refresh Token',
		type: RefreshTokenRequestDTO
	})
	refreshToken(@Body() body: any): Promise<LoginResponseDTO> {
		// console.log(refreshRequest);
		return this.service.refreshToken(body.input.details.refreshToken);
	}

	@Post('/forget-password')
	@ApiOkResponse({
		description: 'Forget Password',
		type: ForgetPasswordDTO
	})
	async forgetPassword(@Body() body: any): Promise<BaseResponse> {
		return this.service.forgetPassword(body.input.details.email, body.input.details.type);
	}

	@Post('/change-password')
	@ApiOkResponse({
		description: 'Change Password'
	})
	async changePassword(@Body() body: any): Promise<BaseResponse> {
		return this.service.changePassword(body.input.details.newPassword, body.input.details.user_id, body.input.details.type);
	}

	@Get('/reset-template/:id/:type')
	@ApiOkResponse({
		description: 'Reset Password Template'
	})
	resetPasswordTemplate(@Param('id') resetId: string, @Param('type') type: string, @Res() response: Response): any {
		// console.log(resetId);
		return response.render('reset-password1', { resetId, domain: appConfig.DOMAIN, type, port: appConfig.PORT }, (err, html) => {
			response.send(html);
		});
	}

	@Get('/reset-password/:id/:password/:type')
	@ApiOkResponse({
		description: 'Reset Password',
		type: BaseResponse
	})
	resetPassword(@Param('id') resetId: string, @Param('password') password: string, @Param('type') type: string): any {
		/* --------------------- Add Reset and Pass ResetId Instead Of UserId --------------------- */
		return this.service.resetPassword(resetId, password, type);
	}

	@Post('/send-verify-otp')
	@ApiOkResponse({
		description: 'Send Verify otp'
	})
	async sendVerifyOtp(@Body() body: any): Promise<BaseResponse> {
		console.log('body');
		console.log(JSON.stringify(body, null, 4));
		return this.service.sendVerifyOtp(body.email, body.type);
	}

	@Post('/verify-otp')
	@ApiOkResponse({
		description: 'Verify Otp'
	})
	verifyOtp(@Body() body: any): any {
		/* --------------------- Add Reset and Pass ResetId Instead Of UserId --------------------- */
		console.log('body');
		console.log(JSON.stringify(body, null, 4));
		return this.service.verifyOtp(body.email, body.otp, body.type);
	}

	@Post('/login-via-firebase')
	@ApiOkResponse({
		description: 'Login Via Firebase Token',
		type: FirebaseLoginResponseDTO
	})
	async loginViaFirebaseToken(@Body() body: any): Promise<LoginResponseDTO> {
		return this.service.loginViaFirebaseToken(body.input.details.token, body.input.details.type);
	}

	@Post('/fcm-token')
	@ApiOkResponse({
		description: 'add fcm token'
	})
	async addFcmToken(@Body() body: any): Promise<any> {
		return this.service.addFcmToken(body, body.type);
	}
	
	@Post('/check-available-stock')
	@ApiOkResponse({
		description: 'add fcm token'
	})
	async checkSupplyVariants(@Body() body: any): Promise<any> {
		return this.service.checkSupplyVariants(body.ids);
	}

	@Post('/import-products')
	@ApiOkResponse({
		description: 'Import Products'
	})
	async importProducts(@Body() importedUsers: any, @Res() res: Response): Promise<any> {
		const res1 = await this.service.importDetails(importedUsers);

		if (res1.errors) {
			throw new HttpException({ message: res1.errors[0]?.message ?? 'some Issue while uploading' }, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return res.send({ status: 'status', message: 'Products uploaded successfully' });
	}

	@Get('/get-date')
	@ApiOkResponse({
		description: 'Import Products'
	})
	async getDate(@Res() res: Response): Promise<any> {
		const date = format(new Date(), 'YYYY-MM-DD HH:mm:SS');
		return res.send({ status: 'status', message: date });
	}

}
