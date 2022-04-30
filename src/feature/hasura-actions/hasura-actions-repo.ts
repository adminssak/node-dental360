/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { HasuraService } from './../../shared/service/hasura.service';
import * as _ from 'lodash';

@Injectable()
export class HasuraActionsRepo {
	constructor(private hasuraService: HasuraService) {}

	async addOrder(supplies_orders: any): Promise<any> {
		const operationsDoc = `
    mutation add_supplies_orders_one($supplies_orders: supplies_orders_insert_input!){
      insert_supplies_orders_one(object: $supplies_orders){
        id
        order_number
        payment_intent
      }
    }
`;
		return this.hasuraService.request(operationsDoc, { supplies_orders });
	}

	async addSecondHandOrder(supplies_orders: any): Promise<any> {
		const operationsDoc = `
    mutation addSecondHandOrder($supplies_orders: second_hand_supplies_orders_insert_input!){
      insert_second_hand_supplies_orders_one(object: $supplies_orders){
        id
        order_number
        payment_intent
      }
    }
`;
		return this.hasuraService.request(operationsDoc, { supplies_orders });
	}

	async clearCart(id: string, supply_id: string, supply_variant_id: string, type: string): Promise<any> {
		const operationsDoc = `
    mutation delete_supply_carts($id: uuid!, $supply_id: uuid!, $supply_variant_id: uuid!) {
      delete_supply_carts(where: {_and: {${type}: {_eq: $id}, supply_id: {_eq: $supply_id}, supply_variant_id: {_eq: $supply_variant_id}}}){
        affected_rows
      }
    }
`;
		return this.hasuraService.request(operationsDoc, { id, supply_id, supply_variant_id });
	}

	async getLargestBid(id: string): Promise<any> {
		const operationsDoc = `
      query MyQuery($id: uuid!) {
        second_hand_supplies_bids(where: {second_hand_supplies_id: {_eq: $id}}, order_by: {price: desc_nulls_last}) {
          dental_practice_id
          dental_practice {
            email
            name
            phone
          }
          dental_professional_id
          dental_professional {
            email
            name
            phone
          }
          dental_supplier_id
          dental_supplier {
            email
            name
            phone
          }
          price
          created_at
          second_hand_supply {
            title
            image
            dental_practice_id
            dental_practice {
              email
              name
              phone
              address
            }
            dental_professional_id
            dental_professional {
              email
              name
              phone
              address
            }
            dental_supplier_id
            dental_supplier {
              email
              name
              phone
              address
            }
          }
        }
      }    
    `;
		return this.hasuraService.request(operationsDoc, { id });
	}

	async updateSecondHandSupplies(id: string, object: any): Promise<any> {
		const operationsDoc = `
      mutation updateSecondHandSupplies($id: uuid!, $object: second_hand_supplies_set_input!) {
        update_second_hand_supplies_by_pk(pk_columns: {id: $id}, _set: $object) {
          id
        }
      }    
    `;
		return this.hasuraService.request(operationsDoc, { id, object });
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

	async getOrderDetails(id: string): Promise<any> {
		const operationsDoc = `
    query getOrderDetails($id: uuid!) {
      supplies_orders_by_pk(id: $id) {
        dental_practice_id
        dental_professional_id
        dental_supplier_id
        order_number
        payment_mode
        payment_status
        sub_total
        tax_amount
        total_amount
        delivery_charge
        coupon_discount
        supplies_order_items {
          id
          price
          quantity
          supply_variant_id
          supply_variant_attributes
        }
      }
    }
`;
		return this.hasuraService.request(operationsDoc, { id });
	}

	async updateOrderDetails(id: string, itemId: string, obj: any): Promise<any> {
		const operationsDoc = `
    mutation updateOrderDetails($id: uuid!, $itemId: uuid!, $obj: supplies_orders_set_input!) {
      update_supplies_orders_by_pk(pk_columns: {id: $id}, _set: $obj) {
        total_amount
      }

      update_supplies_order_items_by_pk(_set: {status: "CANCELLED"}, pk_columns: {id: $itemId}) {
        id
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { id, itemId, obj });
	}

	async insertUserSubscription(object: any): Promise<any> {
		const operationsDoc = `
    mutation insertUserSubscription($object: user_subscriptions_insert_input!) {
      insert_user_subscriptions_one(object: $object) {
        id
        payment_intent
        payment_status
        dental_practice_id
        dental_supplier_id
        dental_professional_id
        dental_practice {
          business_name
        }
        dental_professional{
          name
        }
        dental_supplier {
          business_name
        }
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { object });
	}
  
  async insertRefund(object: any): Promise<any> {
		const operationsDoc = `
    mutation insert_refunds_one($object: refunds_insert_input !) {
      insert_refunds_one(object: $object){
        id
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { object });
	}
   
  async updateRefundStatus(id: any,table): Promise<any> {
		const operationsDoc = `
    mutation MyMutation($id: uuid !) {
      update_${table}_by_pk(pk_columns: {id: $id}, _set: {status: "REFUNDED"}) {
        id
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { id });
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

}
