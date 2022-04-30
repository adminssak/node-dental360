
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { HasuraService } from './../../../shared/service/hasura.service';

@Injectable()
export class EventRepo {
  constructor(
    private hasuraService: HasuraService,
  ) { }

  async addNewsFeed(object: any): Promise<any> {
    const operationsDoc = `
    mutation MyMutation($object: newsfeeds_insert_input!) {
      insert_newsfeeds_one(object: $object){
        id
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, { object })
  }

  async getBusinessName(id: any): Promise<any> {
    const operationsDoc = `
    query getBusinessName($id: uuid !) {
      dental_suppliers_by_pk(id: $id) {
        business_name
      }
    }
    `;
    return this.hasuraService.request(operationsDoc, { id })
  }
  
  async updateClientVerificationKey(id: string, lead_verification_key:string): Promise<any> {
    const operationsDoc = `
      mutation updateLead($id: uuid!, $lead_verification_key: String!) {
        update_clients_by_pk(pk_columns: {id: $id}, _set: {client_verification_key: $lead_verification_key}){
          id
          client_verification_key
        }
      }
    `;
    return this.hasuraService.request(operationsDoc, { id , lead_verification_key });
  }

  async updateClientVerification(id: string): Promise<any> {
    const operationsDoc = `
      mutation updateLead($id: uuid!) {
        update_clients_by_pk(pk_columns: {id: $id}, _set: {client_verification_key: null, client_verified: true}) {
          id
        }
      }
    `;
    return this.hasuraService.request(operationsDoc, { id });
  }
  
  async findByClientVerificationKey(key: string): Promise<any> {
    const operationsDoc = `
      query findByVerificationKey($key: String!) {
        clients(where: {client_verification_key: {_eq: $key}}) {
          id
          email
          name 
          phone
          password
          payload
          type
          subscription_plan_id 
        }
      }    
    `;
    return this.hasuraService.request(operationsDoc, { key });
  }

  async insertDentalPractices(object: any): Promise<any> {
    const operationsDoc = `
      mutation insert_dental_practices($object: dental_practices_insert_input!) {
        insert_dental_practices_one(object: $object){
          id
        }
      }    
    `;
    return this.hasuraService.request(operationsDoc, { object });
  }
  
  async insertDentalProfessional(object: any): Promise<any> {
    const operationsDoc = `
      mutation insertDentalProfessional($object: dental_professionals_insert_input!) {
        insert_dental_professionals_one(object: $object){
          id
        }
      }        
    `;
    return this.hasuraService.request(operationsDoc, { object });
  }

  async insertDentalSuppliers(object: any): Promise<any> {
    const operationsDoc = `
      mutation insertDentalSuppliers($object: dental_suppliers_insert_input!) {
        insert_dental_suppliers_one(object: $object) {
          id
        }
      }            
    `;
    return this.hasuraService.request(operationsDoc, { object });
  }
 

  async findUserById(id: string, table: string): Promise<any> {
    const operationsDoc = `
    query findUserById($id: uuid!) {
      ${table}(limit: 1, where:{id: {_eq: $id}}) {
        id
        name
        email
        phone
        status
        profile_completed
        password
        profile_image
      }
    }
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async getOrderDetails(id: string): Promise<any> {
    const operationsDoc = `
    query getOrderDetails($id: uuid!) {
      supplies_orders_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
        suppliers_id
        created_at
        shipping_address
        order_number
        sub_total
        coupon_discount
        delivery_charge
        total_amount
        tax_amount
        payment_mode
        dental_practice{
          name
          email
          phone
        }
        dental_professional{
          name
          email
          phone
        }
        dental_supplier{
          name
          email
          phone
        }
        supplier{
          business_name
          phone
          email
          address
        }
        supplies_order_items {
          quantity
          price
          supply {
            name
          }
          supply_variant {
            title
            selling_price
          }
        }
      }
    }
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }
  
  async getSecondHandOrderDetails(id: string): Promise<any> {
    const operationsDoc = `
    query getSecondHandOrderDetails($id: uuid!) {
      second_hand_supplies_orders_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
        suppliers_id
        created_at
        shipping_address
        order_number
        sub_total
        delivery_charge
        total_amount
        tax_amount
        payment_mode
        dental_practice {
          name
          email
          phone
        }
        dental_professional {
          name
          email
          phone
        }
        dental_supplier {
          name
          email
          phone
        }
        second_hand_supply {
          dental_practice_id
          dental_professional_id
          dental_supplier_id
          dental_practice {
            name
            business_name
            email
            phone
            address
          }
          dental_professional {
            name
            email
            phone
            address
          }
          dental_supplier {
            name
            business_name
            email
            phone
            address
          }
          title
          bid_price
          buy_now_price
        }
      }
    }       
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async updateUserSubscription(obj: any): Promise<any> {
    const operationsDoc = `
    mutation updateUserSubscription($obj: jsonb!) {
      update_user_subscriptions(where: {payment_intent: {_contains: $obj}}, _set: {payment_status: "PAID"}) {
        affected_rows
        returning {
          id
          payment_intent
          dental_practice {
            abn_number
            business_name
            business_email
            email
          }
          dental_supplier {
            abn_number
            business_name
            business_email
            email
          }
          dental_professional {
            name
            email
          }
          subscription_plan{
            name
          }
          starts_at
          expires_at
          total_amount
          gst
          amount
        }
      }
    }
      
    `;
    return this.hasuraService.request(operationsDoc, { obj });
  }

   
  async updateSupplyOrder(obj: any): Promise<any> {
    const operationsDoc = `
    mutation MyMutation($obj: jsonb!) {
      update_supplies_orders(where: {payment_intent: {_contains: $obj}}, _set: {payment_status: "PAID", status: "PENDING"}) {
        affected_rows
        returning {
          id
          payment_intent
          supplies_order_items {
            supply_id
            supply_variant_id
            quantity
          }
          dental_practice_id
          dental_professional_id
          dental_supplier_id
        }
      }
    }       
    `;
    return this.hasuraService.request(operationsDoc, { obj });
  }

   
  async updateSupplyVariants(id: any,used_stock:number): Promise<any> {
    const operationsDoc = `
    mutation MyMutation($id: uuid !, $used_stock: Int !) {
      update_supply_variants_by_pk(pk_columns: {id: $id}, _inc: {available_stock: $used_stock}) {
        id
        available_stock
      }
    }     
    `;
    return this.hasuraService.request(operationsDoc, { id, used_stock });
  }

  async updateSecondHandSupplyOrder(obj: any): Promise<any> {
    const operationsDoc = `
    mutation MyMutation($obj: jsonb!) {
      update_second_hand_supplies_orders(where: {payment_intent: {_contains: $obj}}, _set: {payment_status: "PAID", status: "PENDING"}) {
        affected_rows
        returning {
          id
          payment_intent
          second_hand_supply {
            product_type
            id
          }
        }
      }
    }    
    `;
    return this.hasuraService.request(operationsDoc, { obj });
  }

  async updateSecondHandSupplyStatus(id: string,status: string): Promise<any> {
    const operationsDoc = `
    mutation MyMutation($id: uuid!) {
      update_second_hand_supplies_by_pk(pk_columns: {id: $id}, _set: {status: "${status}"}) {
        id
      }
    }
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async getSupplyDetails(id: string): Promise<any> {
    const operationsDoc = `
    query getSupplyDetails($id: uuid !) {
      supplies_by_pk(id: $id) {
        dental_suppliers_id
      }
    }    
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }


  async getSecondHandSupplyDetails(id: string): Promise<any> {
    const operationsDoc = `
    query getSecondHandSupplyDetails($id: uuid!) {
      second_hand_supplies_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
      }
    }  
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async getDirectoryDetails(id: string): Promise<any> {
    const operationsDoc = `
    query getDirectoryDetails($id: uuid !) {
      directories_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
      }
    }    
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async getNewsfeedDetails(id: string): Promise<any> {
    const operationsDoc = `
    query getNewsfeedDetails($id: uuid !) {
      newsfeeds_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
        feed_type
      }
    }
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

  async getAllUsers(): Promise<any> {
    const operationsDoc = `
    query getAllUsers {
      dental_practices{
        id
      }
      dental_suppliers{
        id
      }
      dental_professionals{
        id
      }
    }    
  `;
    return this.hasuraService.request(operationsDoc, {  });
  }

  async getDirectoryFollowers(id: string): Promise<any> {
    const operationsDoc = `
    query getDirectoryFollowers($id: uuid!) {
      directory_followers_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
        follower_dental_supplier {
          business_name
        }
        follower_dental_professional {
          name
        }
        follower_dental_practice {
          business_name
        }
      }
    }
  `;
    return this.hasuraService.request(operationsDoc, { id });
  }

}