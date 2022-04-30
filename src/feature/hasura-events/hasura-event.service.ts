import { HasuraActionsService } from './../hasura-actions/hasura-actions.service';
import { Notification } from './schema/notification.interface';
import { NotificationType } from './enums/notification-type.enum';
import * as NotificationMessages from './../constants/notifications';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { BadRequestException, Injectable } from '@nestjs/common';
import { appConfig } from 'core/config/app-config';
import { ClientTypes } from 'feature/auth/enums/client-types';
import { sendMail, sendMailWithAttachment } from 'feature/messaging/send-email';
import * as _ from 'lodash';
import { EventRepo } from './repository/event-repo';
import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import * as EmailTemplates from '../constants/messages';
import { NotificationService } from 'feature/notifications/hasura-notification.service';
const { format } = require('date-fns');

import * as Templates from '../constants/templates';
const ejs = require('ejs');
const html_to_pdf = require('html-pdf-node');

@Injectable()
export class EventService {
	constructor(private eventRepo: EventRepo, 
		private hasuraActionsService: HasuraActionsService,
		private notificationService: NotificationService) {}

	async updateCatalogueTrigger(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		}

		if (oldData && newData.status !== oldData.status && newData.status == 'APPROVED') {
			const object = {
				dental_supplier_id: newData.dental_supplier_id,
				post_image: newData.thumbnail_image,
				title: newData.title,
				description: newData.description,
				feed_type: 'CATALOGUE',
				payload: {
					catalogue_id: newData.id
				}
			};

			await this.eventRepo.addNewsFeed(object);

			const notification: Notification = {
				user_id: newData.dental_supplier_id,
				type: NotificationType.CATALOGUE,
				title: NotificationMessages.catalogueApprovedTitle,
				body: NotificationMessages.catalogueApprovedBody.replace('{{catalogueId}}', newData.id),
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);

		}

		if (oldData && newData.status !== oldData.status && newData.status == 'REJECTED') {

			const notification: Notification = {
				user_id: newData.dental_supplier_id,
				type: NotificationType.CATALOGUE,
				title: NotificationMessages.catalogueRejectedTitle,
				body: NotificationMessages.catalogueRejectedBody.replace('{{catalogueId}}', newData.id),
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);

		}

		if (oldData && newData.status !== oldData.status && newData.status == 'EXPIRED') {

			const notification: Notification = {
				user_id: newData.dental_supplier_id,
				type: NotificationType.CATALOGUE,
				title: NotificationMessages.catalogueExpiredTitle,
				body: NotificationMessages.catalogueExpiredBody.replace('{{catalogueId}}', newData.id),
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);

		}

		if (oldData && newData.status !== oldData.status && newData.status == 'PENDING_APPROVAL') {

			const usernotification: Notification = {
				type: NotificationType.CATALOGUE,
				title: NotificationMessages.newCatalogueTitle,
				body: NotificationMessages.newCatalogueBody,
				payload
			};
			await this.notificationService.sendAdminNotifications(usernotification);
		}

		return { status: 'success' };
	}

	async updateSuppliesTrigger(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (oldData && newData.status !== oldData.status && newData.status == 'APPROVED') {
			if (newData.is_featured == true) {
				const object = {
					dental_supplier_id: newData.dental_suppliers_id,
					post_image: newData.image,
					title: newData.name,
					description: newData.short_info,
					feed_type: 'SUPPLY',
					payload: {
						supply_id: newData.id
					}
				};

				await this.eventRepo.addNewsFeed(object);
			}
			const notification: Notification = {
				user_id: newData.dental_suppliers_id,
				type: NotificationType.SUPPLIES,
				title: NotificationMessages.supplyApprovedTitle,
				body: NotificationMessages.supplyApprovedBody,
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);
		}

		if (oldData && newData.status !== oldData.status && newData.status == 'REJECTED') {
			const notification: Notification = {
				user_id: newData.dental_suppliers_id,
				type: NotificationType.SUPPLIES,
				title: NotificationMessages.supplyRejectedTitle,
				body: NotificationMessages.supplyRejectedBody,
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);
		}

		if (oldData && newData.status !== oldData.status && newData.status == 'PENDING_APPROVAL') {
			const businessData = await this.eventRepo.getBusinessName(newData.dental_suppliers_id);
			const businessName = businessData.data.dental_suppliers_by_pk.business_name;

			const notification: Notification = {
				user_id: newData.dental_suppliers_id,
				type: NotificationType.SUPPLIES,
				title: NotificationMessages.newSupplyTitle,
				body: NotificationMessages.newSupplyBody.replace('{{businessName}}', businessName),
				payload
			};
			await this.notificationService.sendAdminNotifications(notification);
		}

		if (!oldData && newData.status == 'PENDING_APPROVAL') {
			const businessData = await this.eventRepo.getBusinessName(newData.dental_suppliers_id);
			const businessName = businessData.data.dental_suppliers_by_pk.business_name;

			const notification: Notification = {
				user_id: newData.dental_suppliers_id,
				type: NotificationType.SUPPLIES,
				title: NotificationMessages.newSupplyTitle,
				body: NotificationMessages.newSupplyBody.replace('{{businessName}}', businessName),
				payload
			};
			await this.notificationService.sendAdminNotifications(notification);
		}

		return { status: 'success' };
	}

	async updateSupplyOrderTrigger(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		if (oldData && newData.status !== oldData.status && newData.status == 'CANCELLED') {
			let tableName;
			let user_id;

			if (newData.dental_practice_id) {
				tableName = 'dental_practices';
				user_id = newData.dental_practice_id;
			} else if (newData.dental_professional_id) {
				tableName = 'dental_professionals';
				user_id = newData.dental_professional_id;
			} else if (newData.dental_supplier_id) {
				tableName = 'dental_suppliers';
				user_id = newData.dental_supplier_id;
			}

			const userData = await this.eventRepo.findUserById(user_id, tableName);

			const email = userData.data[tableName][0]['email'];
			const name = userData.data[tableName][0]['name'];

			const subject = _.replace(EmailTemplates.orderCancelUserSubject, new RegExp('{{orderNumber}}', 'g'), newData.order_number);

			const orderObject = await this.getOrderObject(newData.id);
			let html = _.replace(EmailTemplates.orderCancelUserBody, new RegExp('{{reason}}', 'g'), newData.canceled_message);

			html = ejs.render(html, orderObject);

			const message = {
				email, // list of receivers
				subject, // Subject line
				text: '', // plain text body
				html
			};
			await sendMail(message.email, message.subject, message.text, message.html);
		}

		return { status: 'success' };
	}

	
	async getOrderObject(orderId) {
		
		const orderData = await this.eventRepo.getOrderDetails(orderId);

		const order = orderData.data.supplies_orders_by_pk;

		let customer_name, customer_email, customer_phone;

		if (order.dental_practice) {
			customer_name = order.dental_practice.name;
			customer_email = order.dental_practice.email;
			customer_phone = order.dental_practice.phone;
		}
		if (order.dental_professional) {
			customer_name = order.dental_professional.name;
			customer_email = order.dental_professional.email;
			customer_phone = order.dental_professional.phone;
		}
		if (order.dental_supplier) {
			customer_name = order.dental_supplier.name;
			customer_email = order.dental_supplier.email;
			customer_phone = order.dental_supplier.phone;
		}

		const date = format(new Date(order.created_at), 'YYYY-MM-DD');

		return {
			order_id: order.order_number,
			order_date: date,
			customer_name,
			customer_email,
			customer_phone,
			address: order.shipping_address,
			supplies_order_items: order.supplies_order_items,
			sub_total: order.sub_total,
			coupon_discount: order.coupon_discount,
			delivery_charge: order.delivery_charge,
			tax_amount: order.tax_amount,
			total_amount: order.total_amount,
			supplier: order.supplier,
			payment_mode: order.payment_mode
		};

	}

	async updateSecondHandSupplyOrderTrigger(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		if (oldData && newData.status !== oldData.status && newData.status == 'CANCELLED') {
			let tableName;
			let user_id;

			if (newData.dental_practice_id) {
				tableName = 'dental_practices';
				user_id = newData.dental_practice_id;
			} else if (newData.dental_professional_id) {
				tableName = 'dental_professionals';
				user_id = newData.dental_professional_id;
			} else if (newData.dental_supplier_id) {
				tableName = 'dental_suppliers';
				user_id = newData.dental_supplier_id;
			}

			const userData = await this.eventRepo.findUserById(user_id, tableName);

			const email = userData.data[tableName][0]['email'];
			const name = userData.data[tableName][0]['name'];

			const subject = _.replace(EmailTemplates.secondHandOrderCancelUserSubject, new RegExp('{{orderNumber}}', 'g'), newData.order_number);
			
			const orderObject = await this.secondhandSupplyInvoice(newData.id);

			let html = _.replace(EmailTemplates.secondHandOrderCancelUserBody, new RegExp('{{reason}}', 'g'), newData.canceled_message);

			html = ejs.render(html, orderObject);

			const message = {
				email, // list of receivers
				subject, // Subject line
				text: '', // plain text body
				html
			};
			await sendMail(message.email, message.subject, message.text, message.html);
		}

		return { status: 'success' };
	}

	async insertDirectoryTrigger(body: any) {
		const newData: any = body.event.data.new;

		const object = {
			dental_supplier_id: newData.dental_supplier_id,
			dental_professional_id: newData.dental_professional_id,
			post_image: newData.banner_image,
			title: newData.name,
			description: newData.description,
			feed_type: 'DIRECTORY',
			payload: {
				directory_id: newData.id
			}
		};

		return this.eventRepo.addNewsFeed(object);
	}

	async insertSupplyOrderNotes(body: any) {
		const newData: any = body.event.data.new;

		const orderId = newData.supplies_order_id;

		const payload = {
			id: orderId
		};

		const orderData = await this.eventRepo.getOrderDetails(orderId);

		const order = orderData.data.supplies_orders_by_pk;

		const order_id = order.order_number;

		if (newData.status == 'PENDING') {
			const supplierNotification: Notification = {
				user_id: order.suppliers_id,
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.newOrderAdminTitle,
				body: NotificationMessages.newOrderAdminBody.replace('{{orderId}}', order_id),
				payload
			};

			const res = await this.notificationService.sendSupplierNotifications(supplierNotification);
			// console.log('res');
			// console.log(JSON.stringify(res, null, 4));

			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.newOrderSupplierTitle,
				body: NotificationMessages.newOrderSupplierBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
			await this.notificationService.sendAdminNotifications(supplierNotification);
		}

		if (newData.status == 'APPROVED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.orderAcceptedTitle,
				body: NotificationMessages.orderAcceptedBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}

		if (newData.status == 'PARTIALLY_SHIPPED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.orderPartialShippedTitle,
				body: NotificationMessages.orderPartialShippedBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}

		if (newData.status == 'SHIPPED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.orderShippedTitle,
				body: NotificationMessages.orderShippedBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}

		if (newData.status == 'DELIVERED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.orderDeliveredTitle,
				body: NotificationMessages.orderDeliveredBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);

			let customer_name, customer_email, customer_phone;
			if (order.dental_practice) {
				customer_name = order.dental_practice.name;
				customer_email = order.dental_practice.email;
				customer_phone = order.dental_practice.phone;
			}
			if (order.dental_professional) {
				customer_name = order.dental_professional.name;
				customer_email = order.dental_professional.email;
				customer_phone = order.dental_professional.phone;
			}
			if (order.dental_supplier) {
				customer_name = order.dental_supplier.name;
				customer_email = order.dental_supplier.email;
				customer_phone = order.dental_supplier.phone;
			}

			const date = format(new Date(order.created_at), 'YYYY-MM-DD');

			const orderObject = {
				order_id: order.order_number,
				order_date: date,
				customer_name,
				customer_email,
				customer_phone,
				address: order.shipping_address,
				supplies_order_items: order.supplies_order_items,
				sub_total: order.sub_total,
				coupon_discount: order.coupon_discount,
				delivery_charge: order.delivery_charge,
				tax_amount: order.tax_amount,
				total_amount: order.total_amount,
				supplier: order.supplier,
				payment_mode: order.payment_mode
			};

			await this.sendOrderInvoice(orderObject, customer_email,Templates.invoice);
		}

		if (newData.status == 'CANCELLED') {
			const supplierNotification: Notification = {
				user_id: order.suppliers_id,
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.orderCancelledAdminTitle,
				body: NotificationMessages.orderCancelledAdminBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.notificationService.sendSupplierNotifications(supplierNotification);

			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.orderCancelledUserTitle,
				body: NotificationMessages.orderCancelledUserBody.replace('{{orderId}}', order_id),
				payload
			};

			const res = await this.sendNotificationToUser(order, usernotification);
			console.log('res');
			console.log(JSON.stringify(res, null, 4));
		}
		return { status: 'success' };
	}

	async insertSupplyEnquiry(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			const supplyData = await this.eventRepo.getSupplyDetails(newData.supply_id);
			const dental_suppliers_id = supplyData.data.supplies_by_pk.dental_suppliers_id;

			const notification: Notification = {
				user_id: dental_suppliers_id,
				type: NotificationType.SUPPLIES_ENQUIRY,
				title: NotificationMessages.newEnquiryTitle,
				body: NotificationMessages.newEnquiryBody,
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);
		}

		if (oldData && newData.status !== oldData.status && newData.status == 'REPLIED') {
			const notification: Notification = {
				type: NotificationType.SUPPLIES_ENQUIRY,
				title: NotificationMessages.enquiryReplyTitle,
				body: NotificationMessages.enquiryReplyBody,
				payload
			};
			await this.sendNotificationToUser(newData,notification);
		}
		return { status: 'success' };
	}

	async insertNewBid(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const second_hand_supplies_id = newData.second_hand_supplies_id;

		const payload = {
			id: newData.id,
			second_hand_supplies_id,
		};

		if (!oldData && newData) {
			const supplyData = await this.eventRepo.getSecondHandSupplyDetails(second_hand_supplies_id);
			const supplyDetails = supplyData.data.second_hand_supplies_by_pk;

			const notification: Notification = {
				type: NotificationType.NEW_BID,
				title: NotificationMessages.newBidTitle,
				body: NotificationMessages.newBidBody.replace('{{productId}}', second_hand_supplies_id),
				payload
			};
			await this.sendNotificationToUser(supplyDetails,notification);
		}
		return { status: 'success' };
	}

	async insertAccountPay(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			const notification: Notification = {
				user_id: newData.supplier_id,
				type: NotificationType.SUPPLIES_ACCOUNT,
				title: NotificationMessages.newAccountPayTitle,
				body: NotificationMessages.newAccountPayBody,
				payload
			};
			await this.notificationService.sendSupplierNotifications(notification);
		}
		return { status: 'success' };
	}

	async insertSupportRequest(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			const usernotification: Notification = {
				type: NotificationType.SUPPORT_REQUEST,
				title: NotificationMessages.newSupportRequestTitle,
				body: NotificationMessages.newSupportRequestBody,
				payload
			};
			if (newData.supplier_id) {
				usernotification.user_id = newData.supplier_id;
				return this.notificationService.sendSupplierNotifications(usernotification);
			}
	
			if (newData.practice_id) {
				usernotification.user_id = newData.practice_id;
				return this.notificationService.sendPracticeNotifications(usernotification);
			}
	
			if (newData.professional_id) {
				usernotification.user_id = newData.professional_id;
				return this.notificationService.sendProfessionalNotifications(usernotification);
			}
		}
		return { status: 'success' };
	}

	async insertCatalogue(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData.status == 'PENDING_APPROVAL') {
			const usernotification: Notification = {
				type: NotificationType.CATALOGUE,
				title: NotificationMessages.newCatalogueTitle,
				body: NotificationMessages.newCatalogueBody,
				payload
			};
			await this.notificationService.sendAdminNotifications(usernotification);
		}
		return { status: 'success' };
	}

	async insertDirectoryAppointment(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			const userData = await this.eventRepo.getDirectoryDetails(newData.directory_id); 
			const usernotification: Notification = {
				type: NotificationType.APPOINTMENT,
				title: NotificationMessages.newDirectoryAppointmentTitle,
				body: NotificationMessages.newDirectoryAppointmentBody.replace("{{name}}",newData.name)
				.replace("{{appointmentDate}}",newData.appointment_date)
				.replace("{{time}}",newData.timeslot?.timeSlotStart),
				payload
			};
			await this.sendNotificationToUser(userData.data.directories_by_pk,usernotification);
			

		}
		return { status: 'success' };
	}

	async insertDirectoryFollowers(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			// const userData = await this.eventRepo.getDirectoryFollowers(newData.id); 
			const usernotification: Notification = {
				type: NotificationType.GENERAL,
				title: NotificationMessages.newFollowerTitle,
				body: NotificationMessages.newFollowerBody,
				payload
			};
			await this.sendNotificationToUser(newData,usernotification);
		}
		return { status: 'success' };
	}

	async newsfeedLike(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.news_feeds_id
		};

		if (!oldData && newData) {
			const feedData = await this.eventRepo.getNewsfeedDetails(newData.news_feeds_id);
			const feed = feedData.data.newsfeeds_by_pk;
			let usernotification: Notification;

			if(feed.feed_type == 'CATALOGUE'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.catalogueLikeTitle,
					body: NotificationMessages.catalogueLikeBody,
					payload
				};
			}

			if(feed.feed_type == 'SUPPLY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.supplyLikeTitle,
					body: NotificationMessages.supplyLikeBody,
					payload
				};
			}

			if(feed.feed_type == 'DIRECTORY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.directoryLikeTitle,
					body: NotificationMessages.directoryLikeBody,
					payload
				};
			}

			if(feed.feed_type == 'SECOND_HAND_SUPPLY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.preOwnedLikeTitle,
					body: NotificationMessages.preOwnedLikeBody,
					payload
				};
			}
			await this.sendNotificationToUser(feed,usernotification);
		}
		return { status: 'success' };
	}

	async newsfeedComment(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.news_feeds_id
		};

		if (!oldData && newData) {
			const feedData = await this.eventRepo.getNewsfeedDetails(newData.news_feeds_id);
			const feed = feedData.data.newsfeeds_by_pk;
			let usernotification: Notification;

			if(feed.feed_type == 'CATALOGUE'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.catalogueCommentTitle,
					body: NotificationMessages.catalogueCommentBody,
					payload
				};
			}

			if(feed.feed_type == 'SUPPLY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.supplyCommentTitle,
					body: NotificationMessages.supplyCommentBody,
					payload
				};
			}

			if(feed.feed_type == 'DIRECTORY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.directoryCommentTitle,
					body: NotificationMessages.directoryCommentBody,
					payload
				};
			}

			if(feed.feed_type == 'SECOND_HAND_SUPPLY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.preOwnedCommentTitle,
					body: NotificationMessages.preOwnedCommentBody,
					payload
				};
			}
			await this.sendNotificationToUser(feed,usernotification);
		}
		return { status: 'success' };
	}

	async insertNewsfeed(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			const feed = newData;
			let usernotification: Notification;

			if(feed.feed_type == 'CATALOGUE'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.newNewsFeedCatalogueTitle,
					body: NotificationMessages.newNewsFeedCatalogueBody,
					payload
				};
			}

			if(feed.feed_type == 'SUPPLY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.newNewsFeedSupplyTitle,
					body: NotificationMessages.newNewsFeedSupplyBody,
					payload
				};
			}

			if(feed.feed_type == 'DIRECTORY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.newNewsFeedDirectoryTitle,
					body: NotificationMessages.newNewsFeedDirectoryBody,
					payload
				};
			}

			if(feed.feed_type == 'SECOND_HAND_SUPPLY'){
				usernotification = {
					type: NotificationType.NEWS_FEED,
					title: NotificationMessages.newNewsFeedPreOwnedTitle,
					body: NotificationMessages.newNewsFeedPreOwnedBody,
					payload
				};
			}
			await this.sendNotificationToAllUsers(usernotification);
		}
		return { status: 'success' };
	}

	async insertPracticeAppointment(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (!oldData && newData) {
			const userData = await this.eventRepo.getDirectoryDetails(newData.practice_sale_id); 
			const usernotification: Notification = {
				type: NotificationType.APPOINTMENT,
				title: NotificationMessages.newPracticeAppointmentTitle,
				body: NotificationMessages.newPracticeAppointmentBody.replace("{{name}}",newData.name)
				.replace("{{appointmentDate}}",newData.appointment_at),
				payload
			};
			await this.sendNotificationToUser(userData.data.directories_by_pk,usernotification);
		}
		return { status: 'success' };
	}

	async supplyInvoice(order_id) {
		// const order_id = '9378bf16-170a-4087-887d-a89e67b3378d';

		const orderData = await this.eventRepo.getOrderDetails(order_id);

		const order = orderData.data.supplies_orders_by_pk;

		let customer_name, customer_email, customer_phone;
		if (order.dental_practice) {
			customer_name = order.dental_practice.name;
			customer_email = order.dental_practice.email;
			customer_phone = order.dental_practice.phone;
		}
		if (order.dental_professional) {
			customer_name = order.dental_professional.name;
			customer_email = order.dental_professional.email;
			customer_phone = order.dental_professional.phone;
		}
		if (order.dental_supplier) {
			customer_name = order.dental_supplier.name;
			customer_email = order.dental_supplier.email;
			customer_phone = order.dental_supplier.phone;
		}

		const date = format(new Date(order.created_at), 'YYYY-MM-DD');

		return {
			order_id: order.order_number,
			order_date: date,
			customer_name,
			customer_email,
			customer_phone,
			address: order.shipping_address,
			supplies_order_items: order.supplies_order_items,
			sub_total: order.sub_total,
			coupon_discount: order.coupon_discount,
			delivery_charge: order.delivery_charge,
			tax_amount: order.tax_amount,
			total_amount: order.total_amount,
			supplier: order.supplier,
			payment_mode: order.payment_mode
		};
	}

	async secondhandSupplyInvoice(order_id) {
		// const order_id = 'b84afd9e-f469-47b7-8f69-64a09f9af38f';

		const orderData = await this.eventRepo.getSecondHandOrderDetails(order_id);

		const order = orderData.data.second_hand_supplies_orders_by_pk;

		let customer_name, customer_email, customer_phone;
		if (order.dental_practice) {
			customer_name = order.dental_practice.name;
			customer_email = order.dental_practice.email;
			customer_phone = order.dental_practice.phone;
		}
		if (order.dental_professional) {
			customer_name = order.dental_professional.name;
			customer_email = order.dental_professional.email;
			customer_phone = order.dental_professional.phone;
		}
		if (order.dental_supplier) {
			customer_name = order.dental_supplier.name;
			customer_email = order.dental_supplier.email;
			customer_phone = order.dental_supplier.phone;
		}

		let supplier;
		if (order.second_hand_supply.dental_practice) {
			supplier = {
				business_name: order.second_hand_supply.dental_practice.business_name,
				phone: order.second_hand_supply.dental_practice.phone,
				email: order.second_hand_supply.dental_practice.email,
				address: order.second_hand_supply.dental_practice.address
			};
		}
		if (order.second_hand_supply.dental_professional) {
			supplier = {
				business_name: order.second_hand_supply.dental_professional.name,
				phone: order.second_hand_supply.dental_professional.phone,
				email: order.second_hand_supply.dental_professional.email,
				address: order.second_hand_supply.dental_professional.address
			};
		}
		if (order.second_hand_supply.dental_supplier) {
			supplier = {
				business_name: order.second_hand_supply.dental_supplier.business_name,
				phone: order.second_hand_supply.dental_supplier.phone,
				email: order.second_hand_supply.dental_supplier.email,
				address: order.second_hand_supply.dental_supplier.address
			};
		}

		const date = format(new Date(order.created_at), 'YYYY-MM-DD');

		const supplyOrderitems = [
			{
				quantity: 1,
				price: order.second_hand_supply.bid_price ?? order.second_hand_supply.buy_now_price,
				supply: {
					name: order.second_hand_supply.title
				},
				supply_variant: {
					title: order.second_hand_supply.title,
					selling_price: order.second_hand_supply.bid_price ?? order.second_hand_supply.buy_now_price
				}
			}
		];

		return {
			order_id: order.order_number,
			order_date: date,
			customer_name,
			customer_email,
			customer_phone,
			address: order.shipping_address,
			supplies_order_items: supplyOrderitems,
			sub_total: order.sub_total,
			coupon_discount: 0,
			delivery_charge: order.delivery_charge,
			tax_amount: order.tax_amount,
			total_amount: order.total_amount,
			supplier: supplier,
			payment_mode: order.payment_mode
		};
	}

	async sendOrderInvoice(orderObject, email, template) {

		try {
		const ejsOptions = {
			async: true
		};
		
		const html = ejs.render(template, orderObject);

		const options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

		const file = { content: html };

		html_to_pdf.generatePdf(file, options).then(async pdfBuffer => {
			const html = `Order Invoice Please find the attachment below`;

			const message = {
				email, // list of receivers
				subject: 'Order Invoice', // Subject line
				text: 'Order Invoice', // plain text body
				html
			};

			await sendMailWithAttachment(message.email, message.subject, message.text, message.html, pdfBuffer);
		});
	} catch (error) {
			console.log(error);
	}
	}

	async insertSecondHandSupplyOrderNotes(body: any) {
		const newData: any = body.event.data.new;

		const order_id = newData.second_hand_supplies_order_id;

		const payload = {
			id: order_id
		};

		const orderData = await this.eventRepo.getSecondHandOrderDetails(order_id);

		const order = orderData.data.second_hand_supplies_orders_by_pk;
		const admin = orderData.data.second_hand_supplies_orders_by_pk.second_hand_supply;

		if (newData.status == 'PENDING') {
			const supplierNotification: Notification = {
				type: NotificationType.SECOND_HAND_SUPPLIES_ORDER,
				title: NotificationMessages.newPreOwnedOrderAdminTitle,
				body: NotificationMessages.newPreOwnedOrderAdminBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(admin, supplierNotification);

			const usernotification: Notification = {
				type: NotificationType.SECOND_HAND_SUPPLIES_ORDER,
				title: NotificationMessages.newPreOwnedOrderSupplierTitle,
				body: NotificationMessages.newPreOwnedOrderSupplierBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}

		if (newData.status == 'APPROVED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.preOwnedOrderAcceptedTitle,
				body: NotificationMessages.preOwnedOrderAcceptedBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}

		if (newData.status == 'SHIPPED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.preOwnedOrderShippedTitle,
				body: NotificationMessages.preOwnedOrderShippedBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}

		if (newData.status == 'DELIVERED') {
			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.preOwnedOrderDeliveredTitle,
				body: NotificationMessages.preOwnedOrderDeliveredBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);

			let customer_name, customer_email, customer_phone;
			if (order.dental_practice) {
				customer_name = order.dental_practice.name;
				customer_email = order.dental_practice.email;
				customer_phone = order.dental_practice.phone;
			}
			if (order.dental_professional) {
				customer_name = order.dental_professional.name;
				customer_email = order.dental_professional.email;
				customer_phone = order.dental_professional.phone;
			}
			if (order.dental_supplier) {
				customer_name = order.dental_supplier.name;
				customer_email = order.dental_supplier.email;
				customer_phone = order.dental_supplier.phone;
			}

			let supplier;
			if (order.second_hand_supply.dental_practice) {
				supplier = {
					business_name: order.second_hand_supply.dental_practice.business_name,
					phone: order.second_hand_supply.dental_practice.phone,
					email: order.second_hand_supply.dental_practice.email,
					address: order.second_hand_supply.dental_practice.address
				};
			}
			if (order.second_hand_supply.dental_professional) {
				supplier = {
					business_name: order.second_hand_supply.dental_professional.name,
					phone: order.second_hand_supply.dental_professional.phone,
					email: order.second_hand_supply.dental_professional.email,
					address: order.second_hand_supply.dental_professional.address
				};
			}
			if (order.second_hand_supply.dental_supplier) {
				supplier = {
					business_name: order.second_hand_supply.dental_supplier.business_name,
					phone: order.second_hand_supply.dental_supplier.phone,
					email: order.second_hand_supply.dental_supplier.email,
					address: order.second_hand_supply.dental_supplier.address
				};
			}

			const date = format(new Date(order.created_at), 'YYYY-MM-DD');

			const supplyOrderitems = [
				{
					quantity: 1,
					price: order.second_hand_supply.bid_price ?? order.second_hand_supply.buy_now_price,
					supply: {
						name: order.second_hand_supply.title
					},
					supply_variant: {
						title: order.second_hand_supply.title,
						selling_price: order.second_hand_supply.bid_price ?? order.second_hand_supply.buy_now_price
					}
				}
			];

			const orderObject = {
				order_id: order.order_number,
				order_date: date,
				customer_name,
				customer_email,
				customer_phone,
				address: order.shipping_address,
				supplies_order_items: supplyOrderitems,
				sub_total: order.sub_total,
				coupon_discount: 0,
				delivery_charge: order.delivery_charge,
				tax_amount: order.tax_amount,
				total_amount: order.total_amount,
				supplier: supplier,
				payment_mode: order.payment_mode
			};

			await this.sendOrderInvoice(orderObject, customer_email,Templates.invoice);
		}

		if (newData.status == 'CANCELLED') {
			const supplierNotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.preOwnedOrderCancelledAdminTitle,
				body: NotificationMessages.preOwnedOrderCancelledAdminBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(admin, supplierNotification);

			const usernotification: Notification = {
				type: NotificationType.SUPPLY_ORDER,
				title: NotificationMessages.preOwnedOrderCancelledUserTitle,
				body: NotificationMessages.preOwnedOrderCancelledUserBody.replace('{{orderId}}', order_id),
				payload
			};

			await this.sendNotificationToUser(order, usernotification);
		}
		return { status: 'success' };
	}

	async sendNotificationToUser(body, usernotification: Notification) {
		console.log('body');
		console.log(JSON.stringify(body, null, 4));
		if (body.dental_supplier_id) {
			usernotification.user_id = body.dental_supplier_id;
			return this.notificationService.sendSupplierNotifications(usernotification);
		}

		if (body.dental_practice_id) {
			usernotification.user_id = body.dental_practice_id;
			return this.notificationService.sendPracticeNotifications(usernotification);
		}

		if (body.dental_professional_id) {
			usernotification.user_id = body.dental_professional_id;
			return this.notificationService.sendProfessionalNotifications(usernotification);
		}
	}

	async sendNotificationToAllUsers(usernotification: any) {
		const allUsers = await this.eventRepo.getAllUsers();
		const practice = allUsers.data.dental_practices;
		const suppliers = allUsers.data.dental_suppliers;
		const professionals = allUsers.data.dental_professionals;

		const allPractice = [];
		const allSuppliers = [];
		const allProfessionals = [];

		practice.forEach(item => {
			const obj = {
				...usernotification,
				dental_practice_id:item.id
			};
			allPractice.push(obj);
		});

		suppliers.forEach(item => {
			const obj = {
				...usernotification,
				dental_supplier_id:item.id
			};
			allSuppliers.push(obj);
		});

		professionals.forEach(item => {
			const obj = {
				...usernotification,
				dental_professional_id:item.id
			};
			allProfessionals.push(obj);
		});

		await this.notificationService.sendAllPracticeNotifications(allPractice);
		await this.notificationService.sendAllProfessionalNotifications(allProfessionals);
		await this.notificationService.sendAllSupplierNotifications(allSuppliers);

		return {status: "Success"};
	}

	async updateSecondHandSuppliesTrigger(body: any) {
		const newData: any = body.event.data.new;
		const oldData: any = body.event.data.old;

		const payload = {
			id: newData.id
		};

		if (oldData && newData.status !== oldData.status && newData.status == 'APPROVED') {
			
			const object = {
				dental_supplier_id: newData.dental_supplier_id,
				dental_practice_id: newData.dental_practice_id,
				dental_professional_id: newData.dental_professional_id,
				post_image: newData.image,
				title: newData.title,
				description: newData.description,
				feed_type: 'SECOND_HAND_SUPPLY',
				payload: {
					second_hand_supply_id: newData.id
				}
			};
			const res =  this.eventRepo.addNewsFeed(object);

			const notification: Notification = {
				user_id: newData.dental_supplier_id,
				type: NotificationType.SECOND_HAND_SUPPLIES,
				title: NotificationMessages.preOwnedSupplyApprovedTitle,
				body: NotificationMessages.preOwnedSupplyApprovedBody,
				payload
			};

			await this.sendNotificationToUser(newData, notification);
		}

		if (oldData && newData.status !== oldData.status && newData.status == 'REJECTED') {
			const notification: Notification = {
				user_id: newData.dental_supplier_id,
				type: NotificationType.SECOND_HAND_SUPPLIES,
				title: NotificationMessages.preOwnedSupplyRejectedTitle,
				body: NotificationMessages.preOwnedSupplyRejectedBody,
				payload
			};
			await this.sendNotificationToUser(newData, notification);
		}

		if (oldData && newData.status !== oldData.status && newData.status == 'PENDING_APPROVAL') {
			// const businessData = await this.eventRepo.getBusinessName(newData.dental_supplier_id);
			let businessName;
			if (newData.dental_supplier_id) {
				const businessData = await this.eventRepo.getBusinessName(newData.dental_supplier_id);
				businessName = businessData.data.dental_suppliers_by_pk.business_name;
			}

			if (newData.dental_practice_id) {
				const tableName = 'dental_practices';
				const businessData = await this.eventRepo.findUserById(newData.dental_practice_id, tableName);
				businessName = businessData.data[tableName][0]['name'];
			}

			if (newData.dental_professional_id) {
				const tableName = 'dental_professionals';
				const businessData = await this.eventRepo.findUserById(newData.dental_professional_id, tableName);
				businessName = businessData.data[tableName][0]['name'];
			}

			const notification: Notification = {
				type: NotificationType.SECOND_HAND_SUPPLIES,
				title: NotificationMessages.newPreOwnedSupplyTitle,
				body: NotificationMessages.newPreOwnedSupplyBody.replace('{{businessName}}', businessName),
				payload
			};
			await this.sendNotificationToUser(newData, notification);
		}

		if (!oldData && newData.status == 'PENDING_APPROVAL') {
			let businessName;
			if (newData.dental_supplier_id) {
				const businessData = await this.eventRepo.getBusinessName(newData.dental_supplier_id);
				businessName = businessData.data.dental_suppliers_by_pk.business_name;
			}

			if (newData.dental_practice_id) {
				const tableName = 'dental_practices';
				const businessData = await this.eventRepo.findUserById(newData.dental_practice_id, tableName);
				businessName = businessData.data[tableName][0]['name'];
			}

			if (newData.dental_professional_id) {
				const tableName = 'dental_professionals';
				const businessData = await this.eventRepo.findUserById(newData.dental_professional_id, tableName);
				businessName = businessData.data[tableName][0]['name'];
			}

			const notification: Notification = {
				type: NotificationType.SECOND_HAND_SUPPLIES,
				title: NotificationMessages.newPreOwnedSupplyTitle,
				body: NotificationMessages.newPreOwnedSupplyBody.replace('{{businessName}}', businessName),
				payload
			};
			await this.sendNotificationToUser(newData, notification);
		}

		return { status: 'success' };
	}

	async sendVerificationMail(details) {
		const passwordKey = uuid.v4();

		await this.eventRepo.updateClientVerificationKey(details.id, passwordKey);

		const url = `${appConfig.DOMAIN}/api/v1/event/verify-lead-email/${passwordKey}`;

		console.log(`Label : ${url}`);

		const html = EmailTemplates.verifyEmailBody.replace('{{url}}', url);

		const message = {
			email: details['email'], // list of receivers
			subject: EmailTemplates.verifyEmailSubject, // Subject line
			text: '', // plain text body
			html
		};

		return sendMail(message.email, message.subject, message.text, message.html);
	}

	async verifyMail(key: string) {
		const res = await this.eventRepo.findByClientVerificationKey(key);

		const lead = res.data?.clients[0];

		if (lead) {
			await this.eventRepo.updateClientVerification(lead.id);
			const password = await bcrypt.hash(lead?.password, appConfig.BCRYPT_SALT);

			let insertMainClient;
			const mainClientPayload: any = {
				name: lead?.name,
				phone: lead?.phone,
				email: lead?.email,
				password,
				id: lead.id,
				present_subscription_id: lead.subscription_plan_id
			};

			if (lead?.type === ClientTypes.PRACTICE) {
				insertMainClient = await this.eventRepo.insertDentalPractices(mainClientPayload);
			} else if (lead?.type === ClientTypes.PROFESSIONAL) {
				insertMainClient = await this.eventRepo.insertDentalProfessional(mainClientPayload);
			} else if (lead?.type === ClientTypes.SUPPLIER) {
				insertMainClient = await this.eventRepo.insertDentalSuppliers(mainClientPayload);
			}

			if (insertMainClient.data.errors) throw new BadRequestException(insertMainClient.data?.errors[0]?.message ?? 'Something went wrong');

			const notification: Notification = {
				type: NotificationType.NEW_USER,
				title: NotificationMessages.signupTitle,
				body: NotificationMessages.signupBody.replace('{{type}}', lead.type),
				payload: {
					userId: lead.id,
					type: lead?.type
				}
			};
			await this.notificationService.sendAdminNotifications(notification);
		}
		return lead;
	}

	async paymentIntentSuccessful(id: string, metadata: any) {
		
		const type = metadata.type;
		if (type == 'subscription') {
			const res = await this.eventRepo.updateUserSubscription({ id });
			const data = res.data.update_user_subscriptions.returning[0];
			let name,abn,email;
			const sub_id= data.id;
			// const startDate = data.starts_at;
			// const endDate = data.expires_at;
			const startDate = format(new Date(data.starts_at), 'DD-MM-YYYY');
			const endDate = format(new Date(data.expires_at), 'DD-MM-YYYY');
			const totalPrice = data.total_amount;
			const gst = data.gst;
			const price = data.total_amount;
			const planName = data.subscription_plan.name;

			if(data.dental_practice) {
				name = data.dental_practice.business_name;
				abn = data.dental_practice.abn_number;
				email = data.dental_practice.email;
			}
			if(data.dental_supplier) {
				name = data.dental_supplier.business_name;
				abn = data.dental_supplier.abn_number;
				email = data.dental_supplier.email;
			}
			if(data.dental_professional) {
				name = data.dental_professional.name;
				abn = 'na';
				email = data.dental_professional.email;
			}

			const orderObject = {
				id:sub_id,
				startDate,
				endDate,
				totalPrice,
				gst,
				price,
				planName,
				name,
				abn
			}

			await this.sendOrderInvoice(orderObject, email,Templates.subInvoice);
			await this.sendOrderInvoice(orderObject, appConfig.MAILER_EMAIL,Templates.subInvoiceAdmin);
		}
		if (type == 'supply_order') {
			const res = await this.eventRepo.updateSupplyOrder({ id });
			const variantData = res.data.update_supplies_orders.returning[0].supplies_order_items;
			const orderData = res.data.update_supplies_orders.returning[0];
			let type, user_id;
			if (orderData.dental_practice_id) {
				type = 'dental_practice_id';
				user_id = orderData.dental_practice_id;
			}
			if (orderData.dental_professional_id) {
				type = 'dental_professional_id';
				user_id = orderData.dental_professional_id;
			}
			if (orderData.dental_supplier_id) {
				type = 'dental_supplier_id';
				user_id = orderData.dental_supplier_id;
			}

			await this.hasuraActionsService.clearCart(type, user_id, variantData);
			for await (const data of variantData) {
				const result = await this.eventRepo.updateSupplyVariants(data.supply_variant_id, -data.quantity);
				console.log('result');
				console.log(JSON.stringify(result, null, 4));
			}
		}
		if (type == 'second_hand_supply_order') {
			const res = await this.eventRepo.updateSecondHandSupplyOrder({ id });
			const type = res?.data?.update_second_hand_supplies_orders?.returning[0]?.second_hand_supply?.product_type;
			const productId = res?.data?.update_second_hand_supplies_orders?.returning[0]?.second_hand_supply?.id;
			if (type == 'ONLY_BUY_NOW') {
				await this.eventRepo.updateSecondHandSupplyStatus(productId, 'REMOVED');
			} else {
				await this.eventRepo.updateSecondHandSupplyStatus(productId, 'COMPLETED');
			}
		}
		return { status: 'success' };
	}
}
