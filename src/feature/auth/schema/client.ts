export interface Client {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  sub_domain?: string;
  logo_image?: any;
  website?: string;
  landline?: string;
  address: string;
  poc_name: string;
  poc_email: string;
  poc_phone: string;
  abn: string;
  account_manager_user_id?: string;
  client_source_id?: string;
  type?: string;
}
