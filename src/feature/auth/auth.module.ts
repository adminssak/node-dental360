
import { Module, Logger } from '@nestjs/common';
import { JwtStrategy } from '../../core/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FirebaseAuthStrategy } from '../../core/strategy/firebase.strategy';
import { AuthGraphRepo } from './repository/auth-graphql-repository';
import { appConfig } from './../../core/config/app-config';
import { HasuraService } from '../../shared/service/hasura.service';
import { APP_GUARD } from '@nestjs/core';
import { HasuraWebHookGuard } from './../../core/gaurd/hasura-web-hook.guard';
import { AuthLoginService } from './auth-service';
import { AuthController } from './controllers/auth.controller';
import * as admin from 'firebase-admin';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';

@Module({
	imports: [
		Logger,
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.register({
			secret: appConfig.ACCESS_TOKEN_SECRET,
			signOptions: {
				expiresIn: appConfig.ACCESS_TOKEN_EXPIRY,
				issuer: appConfig.ACCESS_TOKEN_ISSUER
			}
		}),
		// FirebaseAdminModule.forRoot(
		// 	{
		// 		credential: admin.credential.applicationDefault(),
		// 		projectId: `${appConfig.FIREBASE_PROJECT_ID}`,
		// 		databaseURL: `https://${appConfig.FIREBASE_PROJECT_ID}.firebaseio.com`,
		// 		storageBucket: `${appConfig.FIREBASE_PROJECT_ID}.appspot.com`
		// 	}
		// )
	],
	controllers: [AuthController,],
	providers: [ JwtStrategy, Logger, FirebaseAuthStrategy, HasuraService,
		AuthGraphRepo,
		AuthLoginService,
		{
			provide: APP_GUARD,
			useClass: HasuraWebHookGuard,
		},
	],
	exports: [PassportModule, JwtStrategy, FirebaseAuthStrategy]
})
export class AuthModule { }
