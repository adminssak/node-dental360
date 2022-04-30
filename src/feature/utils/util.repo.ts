import { Injectable } from '@nestjs/common';
import { HasuraService } from './../../shared/service/hasura.service';

@Injectable()
export class UtilRepo {
    constructor(private hasuraService: HasuraService) { }

    getExportFileData(query: string) {
        return this.hasuraService.request(query, {});
    }

}