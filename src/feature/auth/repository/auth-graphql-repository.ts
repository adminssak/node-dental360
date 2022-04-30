/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from "@nestjs/common";
import { HasuraService } from "../../../shared/service/hasura.service";
import * as _ from "lodash";

@Injectable()
export class AuthGraphRepo {

  constructor(private hasuraService: HasuraService) {}

  /* ----------------------- Return User Email If Exists ---------------------- */
  async findUserWithEmail(email: string, table: string): Promise<any> {
    const operationsDoc = `
    query findUserWithEmail($email: String!) {
      ${table}(limit: 1, where:{email: {_eq: $email}}) {
        id
        name
        email
        phone
        status
        profile_completed
        password
        profile_image
        phone_verification_key 
        phone_verification_expiry_at 
        ${table == 'admin_users'  ? '' : 'address'}
        ${table == 'admin_users'  ? '' : 'directory_category_id'}
        ${table == 'admin_users'  ? '' : 'profession_type'}
        ${table == 'admin_users'  ? '' : 'second_hand'}
        ${table == 'dental_professionals' || table == 'admin_users'  ? '' : 'logo'}
        ${table == 'dental_professionals' || table == 'admin_users'  ? '' : 'business_name'}
        ${table == 'dental_professionals' || table == 'admin_users'  ? '' : 'abn_number'}
        ${table == 'dental_professionals' ? 'gender' : ''}
        ${table == 'dental_suppliers' ? 'sell_products' : ''}
      }
    }
`;
    return this.hasuraService.request(operationsDoc, { email });
  }
  
  async getDashboardPermission(id: string, type: string): Promise<any> {
    const operationsDoc = `
    query MyQuery($id: uuid!) {
      user_subscriptions(where: {${type}: {_eq: $id}, plan_type: {_eq: "REGULAR"}}, order_by: {created_at: desc_nulls_last}, limit: 1) {
        subscription_plan {
          dashboard_permissions
        }
      }
    }
`;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async findUserWithPhone(phone: string,table: string): Promise<any> {
    const operationsDoc = `
    query findUserWithPhone($phone: String!) {
      ${table}(limit: 1, where:{phone: {_eq: $phone}}) {
        id
        name
        email
        phone
        status
        profile_completed
        password
        profile_image
        phone_verification_key 
        phone_verification_expiry_at 
        ${table == 'admin_users'  ? '' : 'address'}
        ${table == 'admin_users'  ? '' : 'directory_category_id'}
        ${table == 'admin_users'  ? '' : 'profession_type'}
        ${table == 'admin_users'  ? '' : 'second_hand'}
        ${table == 'dental_professionals' || table == 'admin_users'  ? '' : 'logo'}
        ${table == 'dental_professionals' || table == 'admin_users'  ? '' : 'business_name'}
        ${table == 'dental_professionals' || table == 'admin_users'  ? '' : 'abn_number'}
        ${table == 'dental_professionals' ? 'gender' : ''}
        ${table == 'dental_suppliers' ? 'sell_products' : ''}
      }
    }    
`;
    return this.hasuraService.request(operationsDoc, { phone });
  }

  /* ----------------------- Forget Password ---------------------- */
  async forgetPassword(
    userId: string,
    passwordkey: string,
    expiredAt,
    table:string
  ): Promise<any> {
    const operationsDoc = `
    mutation forgerPassword($userId: uuid!, $passwordkey: String!, $expiredAt: timestamptz!) {
      update_${table}(where: {id: {_eq: $userId}}, _set: {password_reset_key: $passwordkey, password_reset_expiry_at: $expiredAt}) {
        affected_rows
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, {
      userId,
      passwordkey,
      expiredAt,
    });
  }

  async sendVerifyOtp(
    userId: string,
    phone_verification_key : string,
    phone_verification_expiry_at ,
    table:string
  ): Promise<any> {
    const operationsDoc = `
    mutation updatePhoneOTP($userId: uuid!, $phone_verification_key: String!, $phone_verification_expiry_at: timestamptz!) {
      update_${table}(where: {id: {_eq: $userId}}, _set: {phone_verification_key: $phone_verification_key, phone_verification_expiry_at: $phone_verification_expiry_at}) {
        affected_rows
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, {
      userId,
      phone_verification_key,
      phone_verification_expiry_at,
    });
  }

  async verifyOTP(
    phone : string,
    table:string
  ): Promise<any> {
    const operationsDoc = `
    mutation verifyOTP($phone: String!) {
      update_${table}(where: {email: {_eq: $phone}}, _set: {phone_verification_key: null, phone_verification_expiry_at: null,phone_verified:true}) {
        affected_rows
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, {
      phone
    });
  }


  /* ----------------------- Updating User Password ---------------------- */
  async updatePassword(
    passwordkey: string,
    password: string,
    time: any,
    table:string
  ): Promise<any> {
    const operationsDoc = `
    mutation updatePassword($passwordkey: String!, $password: String!, $time: timestamptz!) {
      update_${table}(_set: {password: $password}, where: {_and: [{password_reset_key: {_eq: $passwordkey}}, {password_reset_expiry_at: {_gte: $time}}]}) {
        returning {
          id
          password_reset_expiry_at
        }
      }
    }      
`;
    return this.hasuraService.request(operationsDoc, {
      passwordkey,
      password,
      time,
    });
  }

  async updatePasswordByUserId(
    id: string,
    password: string,
    table:string
  ): Promise<any> {
    const operationsDoc = `
    mutation updatePassword($id:uuid!,$password:String!){
      update_${table}(_set:{password:$password} 
        where:{_and:[{id:{_eq:$id}}
        ] }){
      returning{
        id
      }
    } 
    }
`;
    return this.hasuraService.request(operationsDoc, {
      id,
      password
    });
  }

  async addFcmToken(object: any,table: string): Promise<any> {

    table = table.substring(0, table.length - 1);

    const operationsDoc = `
    mutation addFcmToken($object: ${table}_fcm_tokens_insert_input!) {
      insert_${table}_fcm_tokens_one(object: $object) {
        id
      }
    }
  `;
    return this.hasuraService.request(operationsDoc, { object });
  }

  async addSupplies(objects: any): Promise<any> {
    const operationsDoc = `
    mutation addSupplies($objects: [supplies_insert_input!] !) {
      insert_supplies(objects: $objects){
        affected_rows
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, { objects })
  }
  
  async checkSupplyVariants(ids: Array<string>): Promise<any> {
    const operationsDoc = `
    query supply_variants($ids: [uuid!]! ) {
      supply_variants(where: {id: {_in: $ids}}){
        id
        available_stock
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, { ids })
  }
  
  async getUserSubscriptions(id: string, field: string ): Promise<any> {
    const operationsDoc = `
    query getUserSubscriptions($id: uuid!) {
      user_subscriptions(where: {${field}: {_eq: $id}, plan_type: {_eq: "REGULAR"}}, order_by: {created_at: desc_nulls_last}, limit: 1) {
        payment_status
        id
        subscription_plan_id
      }
    }       
    `;
    return this.hasuraService.request(operationsDoc, { id })
  }

}