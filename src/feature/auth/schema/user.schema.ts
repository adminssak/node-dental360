export enum UserGender {
  UNKNOWN = "UNKNOWN",
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export const UserRoles = {
  SUPER_ADMIN: {
    role: "super_admin",
    id: "ed2f118a-7f0d-453c-946d-8419137da761",
  }, 
  SUPER_ADMIN_EMPLOYEE: {
    role: "super_admin_employee",
    id: "7dce7519-1809-4784-9ca0-c899a72d8fb2",
  },
};

export enum UserStatus {

  PENDING_PROFILE = "PENDING_PROFILE",
  COMPLETED_PROFILE = "COMPLETED_PROFILE",
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",

}

export class User {

  id: string;

  created_at?: Date;

  updated_at?: Date;

  name: string;

  email: string;

  password: string;

  phone: string;

  profile_image: CommonMedia;

  firebase_id: string;

  password_reset_required?: boolean;

  password_reset_key?: string;

  password_reset_expiry_at?: Date;

  email_verified?: boolean;

  email_verify_key?: string;

  email_reset_expiry_at?: Date;

  phone_verified?: boolean;

  phone_verify_key?: string;

  phone_reset_expiry_at?: Date;

  status ?: string;

  gender?: string;

  address ?: CommonAddress;

  date_of_birth: Date;

  other_details: string;

  preferences: string;

  // role_id: string;

}

export interface CommonMedia {

  id: string;
  url: string;
  extension: string;
  mime_type: string;
  file_name: string;
  dimension: string;
  base_color: string;
  is_selected: boolean;
  position: number;

}

export interface CommonAddress {

  id: string;
  name: string;
  line_1: string;
  line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  latitude: number;
  longitude: number;

}

export class ConvertClient {

  subscription_plan_id: string;
  lead_id: string;
  // type: string;
  internal_note: string;
  transaction_info: string;
  transaction_details: any;

}
