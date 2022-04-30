import { HasuraActionsService } from './../hasura-actions/hasura-actions.service';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SchedularRepo } from './repository/repo';
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { addDays,format } from 'date-fns'

@Injectable()
export class Schedulars {
	constructor(private hasuraService: SchedularRepo, private actionService: HasuraActionsService) {}

	@Cron(CronExpression.EVERY_MINUTE)
	async suppliesBidExpiry () {
		console.log(`suppliesBidExpiry Running`);
	    const res = await this.hasuraService.getSecondHandSupplies(this.getDate());
		
	    console.log('res');
	    console.log(JSON.stringify(res, null, 4));

	    for await (const supplier of res.data.second_hand_supplies) {
	      const id = supplier.id;
	      await this.actionService.closeBid({id});
	    }

	    console.log(`suppliesBidExpiry completed`);
	};

	@Cron(CronExpression.EVERY_DAY_AT_2AM)
	async suppliesBidRemoval () {
	    console.log(`suppliesBidRemoval Running`);
	    const res = await this.hasuraService.getSecondHandSuppliesRemoval(this.getDate());

	    console.log('res');
	    console.log(JSON.stringify(res, null, 4));
		const ids = [];
	    for await (const supplier of res.data.second_hand_supplies) {
			ids.push(supplier.id);
	    }
		const result = await this.hasuraService.changeSecondHandSuppliesStatus(ids,'REMOVED');
		console.log('result');
		console.log(JSON.stringify(result, null, 4));
	    console.log(`suppliesBidRemoval completed`);
	};

	@Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
	async cataloguesExpiry() {
		console.log(`cataloguesExpiry Running`);
		const res = await this.hasuraService.getExpiredCatalogues(this.getDate());
		console.log('res');
		console.log(JSON.stringify(res, null, 4));
		const ids = [];
		for await (const catalogue of res.data.catalogues) {
			ids.push(catalogue.id);
		}
		const result = await this.hasuraService.changeCatalogueStatus(ids,'EXPIRED');
		console.log('result');
		console.log(JSON.stringify(result, null, 4));
		console.log(`cataloguesExpiry completed`);
	}
	
	@Cron(CronExpression.EVERY_DAY_AT_1AM)
	async cataloguesScheduled() {
		console.log(`cataloguesScheduled Running`);
		const res = await this.hasuraService.getScheduledCatalogues(this.getDate());
		console.log('res');
		console.log(JSON.stringify(res, null, 4));
		const ids = [];
		for await (const catalogue of res.data.catalogues) {
			ids.push(catalogue.id);
		}
		const result = await this.hasuraService.changeCatalogueStatus(ids,'APPROVED');
		console.log('result');
		console.log(JSON.stringify(result, null, 4));
		console.log(`cataloguesScheduled completed`);
	}
	
	// @Cron(CronExpression.EVERY_DAY_AT_7AM)
	async subscriptionAboutToExpire() {
		console.log(`subscriptionAboutToExpire Running`);
		const date = format(addDays(this.getDate(), 10),'YYYY-MM-DD HH:mm:ss');
		const res = await this.hasuraService.getSubscriptionExpiry(date);
		console.log('res');
		console.log(JSON.stringify(res, null, 4));
		const ids = [];
		for await (const userData of res.data.user_subscriptions) {
			if(userData.dental_practice_id) {
				ids.push({type: 'PRACTICE',id:userData.dental_practice_id})
			}
			if(userData.dental_supplier_id) {
				ids.push({type: 'SUPPLIER',id:userData.dental_supplier_id})
			}
			if(userData.dental_professional_id) {
				ids.push({type: 'PROFESSIONAL',id:userData.dental_professional_id})
			}
		}

		console.log(`subscriptionAboutToExpire completed`);
	}

	getDate(){
		const date = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
		console.log(`date`,date);
		return date;
	}
}
