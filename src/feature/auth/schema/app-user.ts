export class User {
  
  id: string;

  name: string;

  email: string;

  phone: string;

  password: string;

  gender?: string;

  profile_image: string;

  logo: any;

  j_auth_roles_users?: Array<any>;

  role_id?: string ;

  status: string;

  firebase_id?: string;

  profile_completed ?: boolean;

}

export enum BlockedStatus {
  UN_BLOCKED = "UN_BLOCKED",
  BLOCKED = "BLOCKED",
}

export interface UserRoleSchema {
  role: string;
  id: string;
}
