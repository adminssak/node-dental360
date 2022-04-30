/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { EventService } from './../hasura-event.service';
import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { HasuraWebHookGuard } from './../../../core/gaurd/hasura-web-hook.guard';

import { Response } from 'express';
// import * as Templates from '../../constants/templates';
// const ejs = require('ejs');
// const html_to_pdf = require('html-pdf-node');


@ApiTags('Events')
@UseGuards(new HasuraWebHookGuard())
@Controller({ path: '/event' })
export class EventController {
	constructor(private service: EventService) {}

	@Post('/update-catalogue')
	async updateCatalogueTrigger(@Body() body: any) {
		return this.service.updateCatalogueTrigger(body);
	}

	@Post('/update-supplies')
	async updateSuppliesTrigger(@Body() body: any) {
		return this.service.updateSuppliesTrigger(body);
	}

	@Post('/update-supply-order')
	async updateSupplyOrderTrigger(@Body() body: any) {
		return this.service.updateSupplyOrderTrigger(body);
	}

	@Post('/update-second-hand-supply-order')
	async updateSecondHandSupplyOrderTrigger(@Body() body: any) {
		return this.service.updateSupplyOrderTrigger(body);
	}

	@Post('/insert-directory')
	async insertDirectoryTrigger(@Body() body: any) {
		return this.service.insertDirectoryTrigger(body);
	}

	@Post('/insert-supply-order-notes')
	async insertSupplyOrderNotes(@Body() body: any) {
		return this.service.insertSupplyOrderNotes(body);
	}

	@Post('/insert-supply-enquiry')
	async insertSupplyEnquiry(@Body() body: any) {
		return this.service.insertSupplyEnquiry(body);
	}

	@Post('/insert-new-bid')
	async insertNewBid(@Body() body: any) {
		return this.service.insertNewBid(body);
	}

	@Post('/insert-account-pay')
	async insertAccountPay(@Body() body: any) {
		return this.service.insertAccountPay(body);
	}

	@Post('/insert-support-request')
	async insertSupportRequest(@Body() body: any) {
		return this.service.insertSupportRequest(body);
	}
	
	@Post('/insert-catalogue')
	async insertCatalogue(@Body() body: any) {
		return this.service.insertCatalogue(body);
	}

	@Post('/insert-directory-appointment')
	async insertDirectoryAppointment(@Body() body: any) {
		return this.service.insertDirectoryAppointment(body);
	}

	@Post('/insert-practice-appointment')
	async insertPracticeAppointment(@Body() body: any) {
		return this.service.insertPracticeAppointment(body);
	}
	
	@Post('/insert-directory-followers')
	async insertDirectoryFollowers(@Body() body: any) {
		return this.service.insertDirectoryFollowers(body);
	}

	@Post('/insert-newsfeed')
	async insertNewsfeed(@Body() body: any) {
		return this.service.insertNewsfeed(body);
	}

	@Post('/newsfeed-like')
	async newsfeedLike(@Body() body: any) {
		return this.service.newsfeedLike(body);
	}

	@Post('/newsfeed-comment')
	async newsfeedComment(@Body() body: any) {
		return this.service.newsfeedComment(body);
	}

	@Post('/insert-secondhand-supply-order-notes')
	async insertSecondHandSupplyOrderNotes(@Body() body: any) {
		return this.service.insertSecondHandSupplyOrderNotes(body);
	}

	@Post('/update-secondhand-supplies')
	async updateSecondHandSuppliesTrigger(@Body() body: any) {
		return this.service.updateSecondHandSuppliesTrigger(body);
	}
	
	@Post('/payment-intent-successful')
	async paymentIntentSuccessful(@Body() body: any) {
		// console.log('body');
		// console.log(JSON.stringify(body, null, 4));

		const id = body.data.object.id;
		const metadata = body.data.object.metadata;
		// console.log(id);

		console.log('metadata');
		console.log(JSON.stringify(metadata, null, 4));
		await this.service.paymentIntentSuccessful(id,metadata);
		return {status : "successful"};
	}

	@Post('/send-verification-mail')
	@ApiOkResponse({
		description: 'Sends Verification mail'
	})
	sendVerificationMail(@Body() body: any) {
		console.log('body');
		console.log(JSON.stringify(body, null, 4));
		return this.service.sendVerificationMail(body.event.data.row ?? body.event.data.new);
	}

	@Get('/verify-lead-email/:key')
	@ApiOkResponse({
		description: 'Reset Password Template'
	})
	async resetPasswordTemplate(@Param('key') verifyKey: string, @Res() response: any): Promise<any> {
		const data = await this.service.verifyMail(verifyKey);
		const leadId = data?.id;
		const subscriptionId = data?.payload?.subscriptionId;

		let message = "Your account has already been verified.";

		if (leadId) {
			message = "Congratulations!\nYour account has been verified.";
		}

		return response.render('verify-status1', { message, leadId, subscriptionId }, (err, html) => {
			response.send(html);
		});
	}

	@Get("/get-invoice/:id")
    async supplyInvoice(@Param('id') id: string,@Res() response: Response) {
      const data = await this.service.supplyInvoice(id);
    //   const html = ejs.render(Templates.invoice, data);
	//   response.send(html);
      // console.log(`html : ${html}`);

      // const options = { format: 'A4' };
      // Example of options with args //
    //   const options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

    //   const file = { content: html};
    //   // or //
    //   html_to_pdf.generatePdf(file,options).then(pdfBuffer => {
    //     // console.log("PDF Buffer:-", pdfBuffer);
    //     res.attachment('invoice.pdf');

    //     return res.send(pdfBuffer);
    //   });]
	try {
		console.log('data');
	console.log(JSON.stringify(data, null, 4));
	return response.render('invoice', data, (err, html) => {
		response.send(html);
	});
	} catch (error) {
		console.log(error);
	}
	
    }

	@Get("/get-secondhand-invoice/:id")
    async secondhandSupplyInvoice(@Param('id') id: string,@Res() response: Response) {
      const data = await this.service.secondhandSupplyInvoice(id);

		return response.render('invoice', data, (err, html) => {
			response.send(html);
		});
    }
	
	@Get("/get-subscription-invoice/:id")
    async getSubscriptionInvoice(@Param('id') id: string,@Res() response: Response) {
      const data = await this.service.secondhandSupplyInvoice(id);

		return response.render('invoice', data, (err, html) => {
			response.send(html);
		});
    }
	
	@Get("/test")
    async test(@Res() response: Response) {
		return response.render('invoice', {}, (err, html) => {
			response.send(html);
		});
    }
}
