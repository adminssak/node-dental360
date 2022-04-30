import { NotificationService } from 'feature/notifications/hasura-notification.service';
import { Notification } from './../hasura-events/schema/notification.interface';
import { NotificationType } from './../hasura-events/enums/notification-type.enum';
import { EventService } from './../hasura-events/hasura-event.service';
import { sendMail } from 'feature/messaging/send-email';
/* eslint-disable @typescript-eslint/no-var-requires */
import { BadRequestException } from '@nestjs/common';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ClientTypes } from './../auth/enums/client-types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { HasuraActionsRepo } from './hasura-actions-repo';
import { appConfig } from 'core/config/app-config';
import * as _ from 'lodash';
const stripe = require('stripe')(appConfig.STRIPE_SECRET);
stripe.setApiVersion(appConfig.STRIPE_VERSION);
import * as EmailTemplates from '../constants/messages';
import * as NotificationMessages from '../constants/notifications';
// const { format, add } = require('date-fns');
import { addDays, format } from 'date-fns';
// const html_to_pdf = require('html-pdf-node');
const ejs = require('ejs');
import * as Templates from '../constants/templates';

@Injectable()
export class HasuraActionsService {
	constructor(private actionsRepo: HasuraActionsRepo, private notificationService: NotificationService) {}

	async addOrder(body: any, userDetails: any) {
		const role = userDetails['x-hasura-role'];
		const user_id = userDetails['x-hasura-user-id'];

		let payment_intent = null;

		if (body.payment_mode === 'ONLINE') {
			payment_intent = await this.getPaymentIntent(body.total_amount * 100, 'supply_order', user_id);
		}

		const payload = {
			suppliers_id: body.suppliers_id,
			supply_coupon_id: body.supply_coupon_id,
			total_amount: body.total_amount,
			tax_amount: body.tax_amount,
			tax_percentage: body.tax_percentage,
			delivery_charge: body.delivery_charge,
			estimated_delivery_in_days: body.estimated_delivery_in_days,
			status: body.status,
			payment_status: body.payment_status,
			payment_mode: body.payment_mode,
			billing_address: body.billing_address,
			shipping_address: body.shipping_address,
			account_pay_details: body.account_pay_details,
			supplies_order_items: {
				data: body.supplies_order_items
			},
			supplies_order_notes: {
				data: [
					{
						status: 'PENDING',
						message: 'Order Placed.'
					}
				]
			},
			coupon_discount: body.coupon_discount,
			sub_total: body.sub_total,
			[this.getType(role)]: user_id,
			payment_intent
		};

		// if(role === ClientTypes.PRACTICE) {
		//     payload['dental_practice_id'] = user_id;
		// } else if(role === ClientTypes.PROFESSIONAL) {
		//     payload['dental_professional_id'] = user_id;
		// } else if(role === ClientTypes.SUPPLIER) {
		//     payload['dental_supplier_id'] = user_id;
		// }

		const res = await this.actionsRepo.addOrder(payload);

		if (body.payment_mode !== 'ONLINE') {
			await this.clearCart(this.getType(role), user_id, body.supplies_order_items);
			for await (const data of body.supplies_order_items) {
				const result = await this.actionsRepo.updateSupplyVariants(data.supply_variant_id, -data.quantity);
				console.log('result');
				console.log(JSON.stringify(result, null, 4));
			}
		}

		const orderData = res?.data?.insert_supplies_orders_one;
		const tableName = this.getTable(role);

		const userData = await this.actionsRepo.findUserById(user_id, tableName);

		const email = userData.data[tableName][0]['email'];
		const name = userData.data[tableName][0]['name'];

		const businessTableName = `dental_suppliers`;

		const businessUserData = await this.actionsRepo.findUserById(body.suppliers_id, businessTableName);

		const businessEmail = businessUserData.data[businessTableName][0]['email'];
		const businessName = businessUserData.data[businessTableName][0]['name'];

		const subject = _.replace(EmailTemplates.orderPlacedUserSubject, new RegExp('{{orderNumber}}', 'g'), orderData.order_number);

		// let html = _.replace(EmailTemplates.orderPlacedUserBody, new RegExp('{{name}}', 'g'), name);

		// const date = format(new Date(), 'YYYY-MM-DD HH:mm:SS');

		// html = _.replace(html, new RegExp('{{orderId}}', 'g'), orderData.order_number);
		// html = _.replace(html, new RegExp('{{date}}', 'g'), date);
		// html = _.replace(html, new RegExp('{{count}}', 'g'), `${body.supplies_order_items.length}`);
		// html = _.replace(html, new RegExp('{{subtotal}}', 'g'), `AUD ${body.sub_total}`);
		// html = _.replace(html, new RegExp('{{discount}}', 'g'), `AUD ${body.coupon_discount}`);
		// html = _.replace(html, new RegExp('{{deliveryCharges}}', 'g'), `AUD ${body.delivery_charge}`);
		// html = _.replace(html, new RegExp('{{gst}}', 'g'), `AUD ${body.tax_amount}`);
		// html = _.replace(html, new RegExp('{{totalAmount}}', 'g'), `AUD ${body.total_amount}`);

		const adminSubject = _.replace(EmailTemplates.orderPlacedAdminSubject, new RegExp('{{orderNumber}}', 'g'), orderData.order_number);

		// let adminHtml = _.replace(EmailTemplates.orderPlacedAdminBody, new RegExp('{{businessName}}', 'g'), businessName);

		// adminHtml = _.replace(adminHtml, new RegExp('{{name}}', 'g'), name);
		// adminHtml = _.replace(adminHtml, new RegExp('{{orderId}}', 'g'), orderData.order_number);
		// adminHtml = _.replace(adminHtml, new RegExp('{{date}}', 'g'), date);
		// adminHtml = _.replace(adminHtml, new RegExp('{{count}}', 'g'), `${body.supplies_order_items.length}`);
		// adminHtml = _.replace(adminHtml, new RegExp('{{subtotal}}', 'g'), `AUD ${body.sub_total}`);
		// adminHtml = _.replace(adminHtml, new RegExp('{{discount}}', 'g'), `AUD ${body.coupon_discount}`);
		// adminHtml = _.replace(adminHtml, new RegExp('{{deliveryCharges}}', 'g'), `AUD ${body.delivery_charge}`);
		// adminHtml = _.replace(adminHtml, new RegExp('{{gst}}', 'g'), `AUD ${body.tax_amount}`);
		// adminHtml = _.replace(adminHtml, new RegExp('{{totalAmount}}', 'g'), `AUD ${body.total_amount}`);

		const orderObject = await this.getOrderObject(orderData.id);

		console.log('orderObject');
		console.log(JSON.stringify(orderObject, null, 4));

		try {
			const html = ejs.render(EmailTemplates.orderPlacedUserBody, orderObject);
			const adminHtml = ejs.render(EmailTemplates.orderPlacedAdminBody, orderObject);

			const message = {
				email, // list of receivers
				subject, // Subject line
				text: '', // plain text body
				html
			};

			await sendMail(message.email, message.subject, message.text, message.html);
			await sendMail(businessEmail, adminSubject, '', adminHtml);
		} catch (e) {
			console.error(e);
		}
		return orderData;
	}

	async getPaymentIntent(amount, type: string, user_id) {
		amount = Math.floor(amount);
		console.log(`amount`, amount);

		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount,
				currency: 'aud',
				payment_method_types: ['card'],
				metadata: {
					type,
					user_id
				}
			});
			console.log('paymentIntent');
			console.log(JSON.stringify(paymentIntent, null, 4));
			return paymentIntent;
		} catch (err) {
			throw new Error(err);
		}
	}

	async createRefund(body: any) {
		console.log('body');
		console.log(JSON.stringify(body, null, 4));

		const amount = Math.floor(body.amount * 100);

		console.log(`amount`, amount);
		// const type = body.supply_order_id ? 'supply_order' : 'second_hand_supplies_order';
		const type = body.supply_order_id ? 'supplies_orders' : 'second_hand_supplies_orders';
		const id = body.supply_order_id ? body.supply_order_id : body.second_hand_supplies_order_id;

		try {
			const refund_payload = await stripe.refunds.create({
				amount,
				payment_intent: body.payment_intent_id,
				metadata: {
					type,
					id
				}
			});
			console.log('refund');
			console.log(JSON.stringify(refund_payload, null, 4));
			const res = await this.actionsRepo.insertRefund({ ...body, refund_payload });
			await this.actionsRepo.updateRefundStatus(id, type);
			return res.data.insert_refunds_one;
		} catch (err) {
			throw new Error(err);
		}
	}

	async addSecondHandOrder(body: any, userDetails: any) {
		const role = userDetails['x-hasura-role'];
		const user_id = userDetails['x-hasura-user-id'];

		// console.log('userDetails');
		// console.log(JSON.stringify(userDetails, null, 4));

		let payment_intent = null;

		if (body.payment_mode === 'ONLINE') {
			payment_intent = await this.getPaymentIntent(body.total_amount * 100, 'second_hand_supply_order', user_id);
		}

		const payload = {
			suppliers_id: body.suppliers_id,
			total_amount: body.total_amount,
			tax_amount: body.tax_amount,
			tax_percentage: body.tax_percentage,
			delivery_charge: body.delivery_charge,
			estimated_delivery_in_days: body.estimated_delivery_in_days,
			status: body.status,
			payment_status: body.payment_status,
			payment_mode: body.payment_mode,
			billing_address: body.billing_address,
			shipping_address: body.shipping_address,
			account_pay_details: body.account_pay_details,
			second_hand_supply_id: body.second_hand_supply_id,
			second_hand_supplies_order_notes: {
				data: [
					{
						status: 'PENDING',
						message: 'Order Placed.'
					}
				]
			},
			sub_total: body.sub_total,
			[this.getType(role)]: user_id,
			payment_intent
		};

		// if(role === ClientTypes.PRACTICE) {
		//     payload['dental_practice_id'] = user_id;
		// } else if(role === ClientTypes.PROFESSIONAL) {
		//     payload['dental_professional_id'] = user_id;
		// } else if(role === ClientTypes.SUPPLIER) {
		//     payload['dental_supplier_id'] = user_id;
		// }

		const res = await this.actionsRepo.addSecondHandOrder(payload);

		const orderData = res?.data?.insert_second_hand_supplies_orders_one;
		const tableName = this.getTable(role);

		const userData = await this.actionsRepo.findUserById(user_id, tableName);

		const email = userData.data[tableName][0]['email'];
		const name = userData.data[tableName][0]['name'];

		const subject = _.replace(EmailTemplates.secondHandOrderPlacedUserSubject, new RegExp('{{orderNumber}}', 'g'), orderData.order_number);

		const orderObject = await this.getSecondhandOrderObject(orderData.id);

		try {
			const html = ejs.render(EmailTemplates.secondHandOrderPlacedUserBody, orderObject);
			const adminHtml = ejs.render(EmailTemplates.secondHandOrderPlacedAdminBody, orderObject);

			const businessTableName = `dental_suppliers`;

			const businessUserData = await this.actionsRepo.findUserById(body.second_hand_supply_id, businessTableName);

			const businessEmail = businessUserData.data[businessTableName][0]['email'];
			const businessName = businessUserData.data[businessTableName][0]['name'];

			const adminSubject = _.replace(EmailTemplates.secondHandOrderPlacedAdminSubject, new RegExp('{{orderNumber}}', 'g'), orderData.order_number);

			// let adminHtml = _.replace(EmailTemplates.secondHandOrderPlacedAdminBody, new RegExp('{{businessName}}', 'g'), businessName);

			// adminHtml = _.replace(adminHtml, new RegExp('{{name}}', 'g'), name);
			// adminHtml = _.replace(adminHtml, new RegExp('{{orderId}}', 'g'), orderData.order_number);
			// adminHtml = _.replace(adminHtml, new RegExp('{{date}}', 'g'), date);
			// adminHtml = _.replace(adminHtml, new RegExp('{{count}}', 'g'), `1`);
			// adminHtml = _.replace(adminHtml, new RegExp('{{subtotal}}', 'g'), `AUD ${body.sub_total}`);
			// adminHtml = _.replace(adminHtml, new RegExp('{{discount}}', 'g'), `AUD ${body.coupon_discount}`);
			// adminHtml = _.replace(adminHtml, new RegExp('{{deliveryCharges}}', 'g'), `AUD ${body.delivery_charge}`);
			// adminHtml = _.replace(adminHtml, new RegExp('{{gst}}', 'g'), `AUD ${body.tax_amount}`);
			// adminHtml = _.replace(adminHtml, new RegExp('{{totalAmount}}', 'g'), `AUD ${body.total_amount}`);

			await sendMail(businessEmail, adminSubject, '', adminHtml);

			const message = {
				email, // list of receivers
				subject, // Subject line
				text: '', // plain text body
				html
			};

			await sendMail(message.email, message.subject, message.text, message.html);
		} catch (error) {
			console.error(error);
		}

		return orderData;
	}

	async clearCart(type: string, id: string, orderItems: Array<any>) {
		for await (const item of orderItems) {
			const data = await this.actionsRepo.clearCart(id, item.supply_id, item.supply_variant_id, type);
			console.log('data');
			console.log(JSON.stringify(data, null, 4));
		}
	}

	async cancelOrderItem(body: any) {
		const orderItemId = body?.item_id;
		const orderId = body?.supplies_order_id;

		if (!orderId || !orderItemId) {
			throw new BadRequestException('orderId/orderItemId missing', 'orderId/orderItemId missing');
		}

		const orderData = await this.actionsRepo.getOrderDetails(orderId);

		const order = orderData?.data?.supplies_orders_by_pk;

		const orderItem = order?.supplies_order_items.filter(item => item.id === orderItemId);

		if (orderItem.length < 1) throw new BadRequestException('order item not found with given orderItemId', 'order item not found with given orderItemId');

		const itemPrice = orderItem[0].price;

		const obj = {
			total_amount: order.total_amount - itemPrice,
			sub_total: order.sub_total - itemPrice,
			tax_amount: order.tax_amount,
			delivery_charge: order.delivery_charge,
			coupon_discount: order.coupon_discount,
			cancel_reason: body.cancel_reason
		};

		if (obj.sub_total <= 0) {
			obj.total_amount = 0;
			obj.sub_total = 0;
			obj.tax_amount = 0;
			obj.delivery_charge = 0;
			obj.coupon_discount = 0;
		}

		const res = await this.actionsRepo.updateOrderDetails(orderId, orderItemId, obj);

		if (res.error || res.errors) {
			throw new BadRequestException(res.error ? res.error : res.errors, 'Something went wrong');
		} else {
			return { status: 'Success' };
		}
	}

	async closeBid(body: any) {
		// const supplies_id = body.second_hand_supplies_id;
		const supplies_id = body.id;

		const bidData = await this.actionsRepo.getLargestBid(supplies_id);

		// console.log('bidData');
		// console.log(JSON.stringify(bidData, null, 4));

		const bids = bidData.data.second_hand_supplies_bids;

		let updateObj = {};

		const remove_at = format(addDays(new Date(), 1), 'YYYY-MM-DD HH:mm:ss');

		if (bids.length > 0) {
			const bid = bids[0];
			updateObj = {
				bid_price: bid.price,
				winner_dental_supplier_id: bid.dental_supplier_id,
				winner_dental_professional_id: bid.dental_professional_id,
				winner_dental_practice_id: bid.dental_practice_id,
				status: 'COMPLETED',
				remove_at
			};

			const payload = {
				id: supplies_id,
				second_hand_supplies_id: supplies_id
			};

			const usernotification: Notification = {
				type: NotificationType.NEW_BID,
				title: NotificationMessages.bidWonTitle,
				body: NotificationMessages.bidWonBody.replace('{{productId}}', supplies_id),
				payload
			};

			await this.sendNotificationToUser(bid, usernotification);

			const promises = [];

			let customerName;

			if (bid.dental_practice) {
				customerName = bid.dental_practice.name;
			}
			if (bid.dental_professional) {
				customerName = bid.dental_professional.name;
			}
			if (bid.dental_supplier) {
				customerName = bid.dental_supplier.name;
			}

			const notification: Notification = {
				type: NotificationType.NEW_BID,
				title: NotificationMessages.bidEndTitle,
				body: NotificationMessages.bidEndBody.replace('{{productId}}', supplies_id).replace('{{name}}', customerName),
				payload
			};

			for (let index = 1; index < bids.length; index++) {
				const bidData = bids[index];
				promises.push(this.sendNotificationToUser(bidData, notification));
			}

			await Promise.all(promises);
		} else {
			updateObj = {
				status: 'STOPPED',
				remove_at
			};
		}

		const updateData = await this.actionsRepo.updateSecondHandSupplies(supplies_id, updateObj);

		if (bids.length > 0) {
			const bid = bids[0];

			let customerName;
			let customerEmail;
			let customerPhone;
			let businessPhone;
			let businessEmail;
			let businessAddress;
			let businessName;

			if (bid.dental_practice) {
				customerName = bid.dental_practice.name;
				customerEmail = bid.dental_practice.email;
				customerPhone = bid.dental_practice.phone;
			}
			if (bid.dental_professional) {
				customerName = bid.dental_professional.name;
				customerEmail = bid.dental_professional.email;
				customerPhone = bid.dental_professional.phone;
			}
			if (bid.dental_supplier) {
				customerName = bid.dental_supplier.name;
				customerEmail = bid.dental_supplier.email;
				customerPhone = bid.dental_supplier.phone;
			}

			if (bid.second_hand_supply.dental_practice) {
				businessName = bid.second_hand_supply.dental_practice.name;
				businessEmail = bid.second_hand_supply.dental_practice.email;
				businessPhone = bid.second_hand_supply.dental_practice.phone;
				businessAddress = bid.second_hand_supply.dental_practice.address;
			}
			if (bid.second_hand_supply.dental_professional) {
				businessName = bid.second_hand_supply.dental_professional.name;
				businessEmail = bid.second_hand_supply.dental_professional.email;
				businessPhone = bid.second_hand_supply.dental_professional.phone;
				businessAddress = bid.second_hand_supply.dental_professional.address;
			}
			if (bid.second_hand_supply.dental_supplier) {
				businessName = bid.second_hand_supply.dental_supplier.name;
				businessEmail = bid.second_hand_supply.dental_supplier.email;
				businessPhone = bid.second_hand_supply.dental_supplier.phone;
				businessAddress = bid.second_hand_supply.dental_supplier.address;
			}

			const image = bid.second_hand_supply.image.url ?? `${appConfig.DOMAIN}/public/dummy.jpg`;
			const title = bid.second_hand_supply.title ?? `item`;

			let adminHtml = _.replace(EmailTemplates.bidPaymentBody, new RegExp('{{productImage}}', 'g'), image);

			const date = format(new Date(bid.created_at), 'YYYY-MM-DD HH:mm:ss');
			adminHtml = _.replace(adminHtml, new RegExp('{{biddingDate}}', 'g'), date);
			adminHtml = _.replace(adminHtml, new RegExp('{{customerName}}', 'g'), customerName);
			adminHtml = _.replace(adminHtml, new RegExp('{{customerEmail}}', 'g'), customerEmail);
			adminHtml = _.replace(adminHtml, new RegExp('{{customerPhone}}', 'g'), customerPhone);
			adminHtml = _.replace(adminHtml, new RegExp('{{itemName}}', 'g'), title);
			adminHtml = _.replace(adminHtml, new RegExp('{{businessName}}', 'g'), businessName);
			adminHtml = _.replace(adminHtml, new RegExp('{{businessPhone}}', 'g'), businessPhone);
			adminHtml = _.replace(adminHtml, new RegExp('{{businessEmail}}', 'g'), businessEmail);
			adminHtml = _.replace(adminHtml, new RegExp('{{businessAddress}}', 'g'), businessAddress);
			adminHtml = _.replace(adminHtml, new RegExp('{{price}}', 'g'), bid.price);
			adminHtml = _.replace(adminHtml, new RegExp('{{productId}}', 'g'), supplies_id);

			await sendMail(customerEmail, EmailTemplates.bidPaymentSubject, '', adminHtml);

			// const options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

			// const file = { content: adminHtml };

			// html_to_pdf.generatePdf(file, options).then(async pdfBuffer => {
			// 	const html = `Order Invoice Please find the attachment below`;

			// 	const message = {
			// 		email:customerEmail, // list of receivers
			// 		subject: 'Order Invoice', // Subject line
			// 		text: 'Order Invoice', // plain text body
			// 		html
			// 	};

			// 	await sendMailWithAttachment(message.email, message.subject, message.text, message.html, pdfBuffer);
			// });

			await sendMail(customerEmail, EmailTemplates.bidPaymentSubject, '', adminHtml);
		}

		return updateData.data.update_second_hand_supplies_by_pk;
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

	async userSubscriptions(body: any) {
		console.log('body');
		console.log(JSON.stringify(body, null, 4));
		let user_id;

		if (body.dental_supplier_id) {
			user_id = body.dental_supplier_id;
		}
		if (body.dental_practice_id) {
			user_id = body.dental_practice_id;
		}
		if (body.dental_professional_id) {
			user_id = body.dental_professional_id;
		}

		const dental_supplier_id = body.dental_supplier_id;
		const subscription_plan_id = body.subscription_plan_id;
		const starts_at = body.starts_at;
		const expires_at = body.expires_at;
		const total_amount = body.total_amount;
		const payment_intent = body.total_amount == 0 ? {} : await this.getPaymentIntent(total_amount * 100, 'subscription', user_id);
		const dental_practice_id = body.dental_practice_id;
		const dental_professional_id = body.dental_professional_id;
		const plan_type = body.plan_type;
		const payment_status = body.total_amount == 0 ? 'PAID' : 'PENDING';

		const insertRes = await this.actionsRepo.insertUserSubscription({
			dental_practice_id,
			subscription_plan_id,
			dental_supplier_id,
			starts_at,
			expires_at,
			payment_intent,
			dental_professional_id,
			plan_type,
			total_amount,
			payment_status
		});

		console.log('insertRes');
		console.log(JSON.stringify(insertRes, null, 4));

		if (plan_type == 'ADDON') {
			const subscriptionData = insertRes.data.insert_user_subscriptions_one;
			let name;
			const payload = {
				id: subscriptionData.id,
				subscription_plan_id
			};

			if (subscriptionData.dental_practice) {
				name = subscriptionData.dental_practice.business_name;
			}
			if (subscriptionData.dental_professional) {
				name = subscriptionData.dental_professional.name;
			}
			if (subscriptionData.dental_supplier) {
				name = subscriptionData.dental_supplier.business_name;
			}

			const usernotification: Notification = {
				type: NotificationType.ADD_ON_SUBSCRIBTION,
				title: NotificationMessages.addOnTitle,
				body: NotificationMessages.addOnBody.replace('{{businessName}}', name),
				payload
			};

			await this.notificationService.sendAdminNotifications(usernotification);
		}

		return { payment_intent: insertRes.data.insert_user_subscriptions_one.payment_intent };
	}

	getType(type) {
		if (type === ClientTypes.PRACTICE) {
			return 'dental_practice_id';
		}

		if (type === ClientTypes.PROFESSIONAL) {
			return 'dental_professional_id';
		}

		if (type === ClientTypes.SUPPLIER) {
			return 'dental_supplier_id';
		}

		throw new NotFoundException(`Cannot place with this Role ${type}`);
	}

	getTable(type) {
		if (type === ClientTypes.PRACTICE) {
			return 'dental_practices';
		}

		if (type === ClientTypes.PROFESSIONAL) {
			return 'dental_professionals';
		}

		if (type === ClientTypes.SUPPLIER) {
			return 'dental_suppliers';
		}

		if (type === ClientTypes.ADMIN) {
			return 'admin_users';
		}
	}

	async getOrderObject(orderId) {
		const orderData = await this.actionsRepo.getOrderDetails(orderId);

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

	async getSecondhandOrderObject(order_id) {
		// const order_id = 'b84afd9e-f469-47b7-8f69-64a09f9af38f';

		const orderData = await this.actionsRepo.getSecondHandOrderDetails(order_id);

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
}
