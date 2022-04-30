import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UtilRepo } from './util.repo';

@Injectable()
export class UtilService {
    constructor(private utilRepo: UtilRepo) { }

    async getDataAndExportFile(query: string): Promise<any> {
        const response = await this.utilRepo.getExportFileData(query)
        const data = response.data;
        if (data) {
            const tableName = Object.keys(data)[0];
            return data[tableName];
        } else {
            throw new HttpException({ status: 'failed', message: 'Query Failed' }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}