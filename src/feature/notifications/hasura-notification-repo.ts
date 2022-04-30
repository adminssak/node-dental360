/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { HasuraService } from '../../shared/service/hasura.service';
// import * as _ from 'lodash';

@Injectable()
export class HasuraNotificationRepo {
	constructor(private hasuraService: HasuraService) {}

	async addAdminNotifications(objects: any): Promise<any> {
		const operationsDoc = `
      mutation addAdminNotifications($objects: [admin_user_notifications_insert_input!]!) {
        insert_admin_user_notifications(objects: $objects) {
          affected_rows
        }
      }
    `;
		return this.hasuraService.request(operationsDoc, { objects });
	}

	async addPracticeNotifications(objects: any): Promise<any> {
		const operationsDoc = `
      mutation addPracticeNotifications($objects: [dental_practice_notifications_insert_input!]!) {
        insert_dental_practice_notifications(objects: $objects) {
          affected_rows
        }
      }
    `;
		return this.hasuraService.request(operationsDoc, { objects });
	}

	async addProfessionalNotifications(objects: any): Promise<any> {
		const operationsDoc = `
      mutation addProfessionalNotifications($objects: [dental_professional_notifications_insert_input!]!) {
        insert_dental_professional_notifications(objects: $objects) {
          affected_rows
        }
      }
    `;
		return this.hasuraService.request(operationsDoc, { objects });
	}

	async addSupplierNotifications(objects: any): Promise<any> {
		const operationsDoc = `
      mutation addSupplierNotifications($objects: [dental_supplier_notifications_insert_input!]!) {
        insert_dental_supplier_notifications(objects: $objects) {
          affected_rows
        }
      }
    `;
		return this.hasuraService.request(operationsDoc, { objects });
	}

	async getAdminUsers(): Promise<any> {
		const operationsDoc = `
     query getAdminUsers {
        admin_users {
          id
          name
          email
          phone
        }
      }
    `;
		return this.hasuraService.request(operationsDoc, {});
	}
}
