import { Schedulars } from './schedular';
import { HasuraWebHookGuard } from './../../core/gaurd/hasura-web-hook.guard';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';


@ApiTags('schedular')
@UseGuards(new HasuraWebHookGuard())
@Controller({ path: '/schedular' })
export class SchedularController {
	constructor(private service: Schedulars) {}

	@Get('/suppliesBidExpiry')
	async suppliesBidExpiry(): Promise<any> {
		return this.service.suppliesBidExpiry();
	}

	@Get('/suppliesBidRemoval')
	async suppliesBidRemoval(): Promise<any> {
		return this.service.suppliesBidRemoval();
	}

	@Get('/cataloguesExpiry')
	async cataloguesExpiry(): Promise<any> {
		return this.service.cataloguesExpiry();
	}

	@Get('/cataloguesScheduled')
	async cataloguesScheduled(): Promise<any> {
		return this.service.cataloguesScheduled();
	}

	@Get('/subscriptionAboutToExpire')
	async subscriptionAboutToExpire(): Promise<any> {
		return this.service.subscriptionAboutToExpire();
	}
}
