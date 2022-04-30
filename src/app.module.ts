import { NotificationService } from './feature/notifications/hasura-notification.service';
import { HasuraActionsRepo } from './feature/hasura-actions/hasura-actions-repo';
import { HasuraActionsService } from './feature/hasura-actions/hasura-actions.service';
import { EventService } from './feature/hasura-events/hasura-event.service';
import { AuthModule } from './feature/auth/auth.module';
import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { HasuraService } from './shared/service/hasura.service';
import { HealthController } from './health.controller';
import { WinstonLogger } from 'nest-winston';
// import { SeederModule } from './seeder/seeder.module';
import { FileUploadModule } from './feature/file-upload/file-upload-module';
import { UtilModule } from './feature/utils/util.module';
import { HasuraEventModule } from './feature/hasura-events/hasura.module';
import { HasuraActionsModule } from './feature/hasura-actions/hasura-actions.module';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import { appConfig } from 'core/config/app-config';
import * as admin from 'firebase-admin';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { HasuraSchedularModule } from 'feature/hasura-schedular/hasura.module';
import { EventRepo } from 'feature/hasura-events/repository/event-repo';

@Module({ 
  imports: [
    AuthModule,
    TerminusModule,
    // SeederModule,
    FileUploadModule,
    UtilModule,
    ScheduleModule.forRoot(),
    // removed
    ConfigModule.forRoot({
			load: [(): any => ({ ...appConfig })]
		}),
		FirebaseAdminModule.forRootAsync({
			useFactory: () => ({
				credential: admin.credential.applicationDefault(),
				projectId: `${appConfig.FIREBASE_PROJECT_ID}`,
				databaseURL: `https://${appConfig.FIREBASE_PROJECT_ID}.firebaseio.com`,
				storageBucket: `${appConfig.FIREBASE_PROJECT_ID}.appspot.com`
			})
		}),
    HasuraEventModule,
    HasuraActionsModule,
    HasuraSchedularModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, HasuraService, Logger, WinstonLogger],
})
export class AppModule { }
