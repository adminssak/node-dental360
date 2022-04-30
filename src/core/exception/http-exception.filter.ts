import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

import { Request, Response } from 'express';
import { HttpExceptionModel } from './http-exception.model';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	catch(exception: any, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse() as Response;
		const request = ctx.getRequest() as Request;
		const statusCode = exception.getStatus();
		const stack = exception.stack;
		let message = exception.message;
		const error = exception.response.name || exception.response.error || exception.name || 'Unknown';
		const errors = exception.response.errors || null;
		const path = request ? request.url : null;

		if (statusCode === HttpStatus.UNAUTHORIZED) {
			if (typeof exception.response !== 'string') {
				message = exception.message || exception.response.message || 'you do not have permission to access this resource';
			}
		}

		const httpExceptionModel = new HttpExceptionModel(
			statusCode,
			message,
			error,
			errors,
			path,
			stack,
		);

		response.status(statusCode).json(httpExceptionModel);
	}
}
