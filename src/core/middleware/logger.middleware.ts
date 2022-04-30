import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	use(req: Request, res: Response, next: () => void) {
		console.log(`Request...`);
		next();
	}
}
