import { HasuraNotificationRepo } from './../notifications/hasura-notification-repo';
import { EventRepo } from './../hasura-events/repository/event-repo';
import { EventService } from './../hasura-events/hasura-event.service';
import { NotificationService } from 'feature/notifications/hasura-notification.service';
import { Logger, Module } from '@nestjs/common';
import { HasuraActionsService } from './hasura-actions.service';
import { HasuraActionsController } from './hasura-actions.controller';
import { HasuraService } from 'shared/service/hasura.service';
import { HasuraActionsRepo } from './hasura-actions-repo';
import { HasuraEventModule } from 'feature/hasura-events/hasura.module';

@Module({
  // imports:[HasuraEventModule],
  imports: [
    Logger,
    // HasuraEventModule
  ],
  providers: [HasuraActionsService,HasuraService,HasuraActionsRepo,NotificationService,HasuraNotificationRepo,EventService,EventRepo],
  controllers: [HasuraActionsController]
})
export class HasuraActionsModule {}
