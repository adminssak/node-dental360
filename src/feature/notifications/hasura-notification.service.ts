import { Notification } from './../hasura-events/schema/notification.interface';
import { HasuraNotificationRepo } from './hasura-notification-repo';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Injectable } from '@nestjs/common';
// import { appConfig } from 'core/config/app-config';
// import { ClientTypes } from 'feature/auth/enums/client-types';
// import { sendMail } from 'feature/messaging/send-email';
// import * as _ from 'lodash';
// import * as bcrypt from 'bcrypt';
// import * as uuid from 'uuid';
// import * as EmailTemplates from '../constants/messages';
// const { format } = require('date-fns');

@Injectable()
export class NotificationService {
	constructor(private repo: HasuraNotificationRepo) {}

	async sendAdminNotifications(payload: Notification) {

		const adminUsers = await this.repo.getAdminUsers();

		const notificationPayload = [];

		for (const adminUser of adminUsers.data.admin_users) {
			const notification = {
				admin_user_id : adminUser.id,
				type:payload.type,
				title:payload.title,
				body:payload.body,
				payload:payload.payload,
				image:payload.image
			}
			notificationPayload.push(notification);
		}
		
		return this.repo.addAdminNotifications(notificationPayload);
	}

	async sendPracticeNotifications(payload: Notification) {

		const notificationPayload = [];

		const notification = {
			dental_practice_id : payload.user_id,
			type:payload.type,
			title:payload.title,
			body:payload.body,
			payload:payload.payload,
			image:payload.image
		}
		
		notificationPayload.push(notification);
		return this.repo.addPracticeNotifications(notificationPayload);
	}
	
	async sendProfessionalNotifications(payload: Notification) {

		const notificationPayload = [];

		const notification = {
			dental_professional_id : payload.user_id,
			type:payload.type,
			title:payload.title,
			body:payload.body,
			payload:payload.payload,
			image:payload.image
		}
		
		notificationPayload.push(notification);
		return this.repo.addProfessionalNotifications(notificationPayload);
	}
	
	async sendSupplierNotifications(payload: Notification) {

		const notificationPayload = [];

		const notification = {
			dental_supplier_id : payload.user_id,
			type:payload.type,
			title:payload.title,
			body:payload.body,
			payload:payload.payload,
			image:payload.image
		}
		
		notificationPayload.push(notification);
		return this.repo.addSupplierNotifications(notificationPayload);
	}

	async sendAllPracticeNotifications(payload: any) {
		return this.repo.addPracticeNotifications(payload);
	}
	
	async sendAllProfessionalNotifications(payload: any) {
		return this.repo.addProfessionalNotifications(payload);
	}
	
	async sendAllSupplierNotifications(payload: any) {
		return this.repo.addSupplierNotifications(payload);
	}
}
