import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { HasuraService } from '../../../shared/service/hasura.service';

@Injectable()
export class SchedularRepo {
	constructor(private hasuraService: HasuraService) {}

	async getSecondHandSupplies(time: any): Promise<any> {
		const operationsDoc = `
    query MyQuery($time: timestamp!) {
      second_hand_supplies(where: {bid_ends_at: {_lte: $time}, status: {_eq: "APPROVED"}}){
        id
        title
        bid_ends_at
        remove_at
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { time });
	}
  
  async getSecondHandSuppliesRemoval(time: any): Promise<any> {
		const operationsDoc = `
    query MyQuery($time: timestamp!) {
      second_hand_supplies(where: {remove_at: {_lte: $time}, status: {_in: ["STOPPED","COMPLETED"]}}) {
        id
        title
        bid_ends_at
        remove_at
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { time });
	}

	async getScheduledCatalogues(time: any): Promise<any> {
		const operationsDoc = `
    query getCatalogues($time: timestamp!) {
      catalogues(where: {status: {_eq: "SCHEDULED"}, schedulerDay: {_lte: $time}}){
        id
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { time });
	}

  async getExpiredCatalogues(time: any): Promise<any> {
		const operationsDoc = `
    query catalogues($time: timestamp!) {
      catalogues(where: {status: {_eq: "APPROVED"}, expiryDay: {_lte: $time}}) {
        id
        months_count
        schedulerDay
      }
    }
    `;
		return this.hasuraService.request(operationsDoc, { time });
	}

  async changeSecondHandSuppliesStatus(ids: Array<string>, status: string): Promise<any> {
		const operationsDoc = `
    mutation MyMutation($status: String!, $ids: [uuid!] !) {
      update_second_hand_supplies(where: {id: {_in: $ids}}, _set: {status: $status}){
        affected_rows
      }
    }       
    `;
		return this.hasuraService.request(operationsDoc, { ids, status });
	}
  
  async changeCatalogueStatus(ids: Array<string>, status: string): Promise<any> {
		const operationsDoc = `
    mutation MyMutation($status: String!, $ids: [uuid!] !) {
      update_catalogues(where: {id: {_in: $ids}}, _set: {status: $status}){
        affected_rows
      }
    }       
    `;
		return this.hasuraService.request(operationsDoc, { ids, status });
	}
  
  async getSubscriptionExpiry(date: any): Promise<any> {
		const operationsDoc = `
    query user_subscriptions($date: timestamp!) {
      user_subscriptions(where: {expires_at: {_eq: $date}}){
        dental_practice_id
        dental_supplier_id
        dental_professional_id
        subscription_plan_id
        subscription_plan{
          description
          name
        }
      }
    }          
    `;
		return this.hasuraService.request(operationsDoc, { date });
	}

}
