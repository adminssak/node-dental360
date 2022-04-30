// import { Schedulars } from './feature/hasura-schedular/schedular';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
// import * as fs from 'fs';
import { ValidationPipe, Logger, InternalServerErrorException } from '@nestjs/common';
import { join } from 'path';
import { appConfig } from './core/config/app-config';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { HttpExceptionFilter } from './core/exception/http-exception.filter';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as  winston from 'winston';
import * as  WinstonCloudWatch from 'winston-cloudwatch';

import cookieParser = require('cookie-parser');



import AWS = require('aws-sdk');
AWS.config.update({
	region: appConfig.AWS_REGION,
});

// somewhere in your initialization file
async function bootstrap() {
	try {

		const app = await NestFactory.create<NestExpressApplication>(AppModule, {

			logger: WinstonModule.createLogger({
				transports: [
					new winston.transports.Console({
						format: winston.format.combine(
							winston.format.timestamp(),
							nestWinstonModuleUtilities.format.nestLike(),
						),
					}),
					new WinstonCloudWatch({
						awsAccessKeyId: appConfig.AWS_KEY,
						awsRegion: appConfig.AWS_REGION,
						awsSecretKey: appConfig.AWS_SECRET,
						logGroupName: appConfig.AWS_LOG_GROUP,
						logStreamName: appConfig.AWS_LOG_STREAM
					})
				]
			}),
			cors: true
		});



		// app.enableCors({
		// 	preflightContinue: true,
		// 	origin: [RegExp('/https?:\/\/localhost'), 'http://localhost:3002', 'https://arsenal-63742.firebaseapp.com/'],
		// });

		// It Enables Cors For All Domain
		app.enableCors();

		// Helmet helps you secure your Express apps by setting various HTTP headers. 
		app.use(helmet());

		//Compress Json
		app.use(compression());
		app.use(cookieParser())

		// Cross Site Forgery By Cookie
		// app.use(csurf({ cookie: true }));


		// app.use(
		// 	rateLimit({
		// 		windowMs: 15 * 60 * 1000, // 15 minutes
		// 		max: 100, // limit each IP to 100 requests per windowMs
		// 	}),
		// );


		// body parser
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));

		// interceptors
		app.useGlobalInterceptors(new LoggingInterceptor());
		// app.useGlobalInterceptors(new TimeoutInterceptor());
		app.useGlobalFilters(new HttpExceptionFilter());
		// global nest setup
		app.useGlobalPipes(new ValidationPipe({
			whitelist: true,
		}));

		/* -------------- Settings For Dynamic Template Using HandleBar ------------- */
		app.setGlobalPrefix('/api/v1');
		app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/public/' });
		app.setBaseViewsDir(join(__dirname, '..', 'views'));
		// app.setViewEngine('hbs');
		app.setViewEngine('ejs');

		// Starts listening to shutdown hooks
		app.enableShutdownHooks();

		// Swagger Documentation
		const swaggerOptions = new DocumentBuilder()
			.setTitle(appConfig.APP_NAME)
			.setVersion(appConfig.API_VERSION)
			.setDescription(`${appConfig.APP_NAME} application backend api's.`)
			.setTermsOfService(appConfig.ORGANIZATION_WEBSITE)
			.setContact(appConfig.ORGANIZATION_NAME, appConfig.ORGANIZATION_WEBSITE, appConfig.ORGANIZATION_EMAIL)
			.setLicense('MIT License', appConfig.ORGANIZATION_WEBSITE)
			.setExternalDoc('For more information', appConfig.ORGANIZATION_WEBSITE)
			.addServer(appConfig.SWAGGER_DEV_SERVER, 'DEV Server')
			.addServer(appConfig.SWAGGER_PROD_SERVER, 'PROD Server')
			.addBearerAuth({
				type: 'http',
				bearerFormat: 'JWT',
				scheme: 'bearer'
			})
			.build();

		const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
		SwaggerModule.setup('/api', app, swaggerDocument, {
			explorer: false,
		});

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		await app.listen(process.env.PORT || appConfig.PORT);

		Logger.log(`🚀  Server running on http://localhost:${appConfig.PORT}/api`, 'Bootstrap');
		Logger.log(`occured ${new Date()}`)
		
	} catch (error) {
		// logger.error(error)
		Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false);
		// process.exit();
		throw new InternalServerErrorException(error);
	}
}

bootstrap().catch(e => {
	throw e;
});
