import { UtilController } from './util.controller';
import { Module } from '@nestjs/common';
import { HasuraService } from './../../shared/service/hasura.service';
import { UtilRepo } from './util.repo';
import { UtilService } from './util.service';


@Module({
    controllers: [UtilController],
    imports: [

    ],
    providers: [UtilRepo, HasuraService, UtilService],
    exports: []
})
export class UtilModule {

}