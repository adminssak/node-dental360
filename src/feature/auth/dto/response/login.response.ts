import { ApiProperty } from "@nestjs/swagger";

export class LoginResponseDTO {
  @ApiProperty({})
  id?: string;
  @ApiProperty({})
  name?: string;
  @ApiProperty({})
  email?: string;
  @ApiProperty({})
  accessToken?: string;
  @ApiProperty({})
  refreshToken?: string;
  @ApiProperty({})
  message?: string;
  @ApiProperty({})
  profile_image?: any;
  @ApiProperty({})
  status: string;
  @ApiProperty({})
  type: string;
  @ApiProperty({})
  phone?: string;
  @ApiProperty({})
  logo?: any;
  @ApiProperty({})
  profile_completed: boolean;

  @ApiProperty({})
  address?: any;
  @ApiProperty({})
  directory_category_id?: any;
  @ApiProperty({})
  profession_type?: any;
  @ApiProperty({})
  second_hand?: any;
  @ApiProperty({})
  business_name?: any;
  @ApiProperty({})
  abn_number?: any;
  @ApiProperty({})
  gender?: any;
  @ApiProperty({})
  sell_products?: any;
  @ApiProperty({})
  dashboard_permissions?: any;

  @ApiProperty({})
  plan_id?: any;  
  @ApiProperty({})
  subscription_id?: any; 
  @ApiProperty({})
  payment_status?: any;
}

export enum ApprovalEnum {
  APPROVED = "APPROVED",
  DISAPPROVED = "DISAPPROVED",
}
export enum BlockedEnum {
  BLOCKED = "BLOCKED",
  UN_BLOCKED = "UN_BLOCKED",
}

class Role {
  @ApiProperty({})
  role: string;
}

class J_AppUser_Role {
  @ApiProperty({})
  app_user_role_id: string;
  @ApiProperty({ enum: ApprovalEnum })
  approval_status: ApprovalEnum;
  @ApiProperty({ enum: BlockedEnum })
  blocked_status: BlockedEnum;
  @ApiProperty({ type: Role })
  app_user_role: any;
}

export class FirebaseLoginResponseDTO {
  @ApiProperty({})
  id?: string;
  @ApiProperty({})
  display_name?: string;
  @ApiProperty({})
  email?: string;
  @ApiProperty({})
  accessToken?: string;
  @ApiProperty({})
  refreshToken?: string;
  @ApiProperty({})
  message?: string;
  @ApiProperty({ type: J_AppUser_Role })
  j_app_users_app_user_roles?: any;
  @ApiProperty({ enum: ApprovalEnum })
  approval_status?: ApprovalEnum;
  @ApiProperty({ enum: BlockedEnum })
  blocked_status?: BlockedEnum;
  @ApiProperty({})
  created_at?: string;
  @ApiProperty({})
  firebase_id?: string;
  @ApiProperty({})
  firebase_provider_id?: string;
  @ApiProperty({})
  profile_image?: string;
  @ApiProperty({})
  profile_completed?: boolean;
}
