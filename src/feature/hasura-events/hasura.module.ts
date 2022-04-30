import { HasuraActionsModule } from './../hasura-actions/hasura-actions.module';
import { HasuraActionsRepo } from './../hasura-actions/hasura-actions-repo';
import { HasuraActionsService } from './../hasura-actions/hasura-actions.service';
import { NotificationService } from 'feature/notifications/hasura-notification.service';
import { EventRepo } from './repository/event-repo';
import { EventService } from './hasura-event.service';
import { Logger, Module } from '@nestjs/common';
import { HasuraService } from './../../shared/service/hasura.service';
import { EventController } from './controllers/event.controller';
import { HasuraNotificationRepo } from 'feature/notifications/hasura-notification-repo';

@Module({
    imports: [
        Logger,
        HasuraActionsModule
    ],
    controllers: [EventController,],
    providers: [EventService, EventRepo, Logger, HasuraService,NotificationService,HasuraNotificationRepo,HasuraActionsService,HasuraActionsRepo],
    exports: [EventService]
})
export class HasuraEventModule { }
