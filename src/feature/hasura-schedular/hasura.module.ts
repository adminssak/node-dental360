import { HasuraNotificationRepo } from './../notifications/hasura-notification-repo';
import { NotificationService } from './../notifications/hasura-notification.service';
import { SchedularController } from './schedular.controller';
import { HasuraActionsRepo } from './../hasura-actions/hasura-actions-repo';
import { HasuraActionsService } from './../hasura-actions/hasura-actions.service';
import { Schedulars } from './schedular';

import { Logger, Module } from '@nestjs/common';
import { SchedularRepo } from './repository/repo';
import { HasuraService } from 'shared/service/hasura.service';

@Module({
    imports: [
        Logger,
    ],
    controllers: [SchedularController,],
    providers: [Schedulars,SchedularRepo,HasuraService,HasuraActionsService,HasuraActionsRepo,NotificationService,HasuraNotificationRepo],
    exports: []
})
export class HasuraSchedularModule { }
