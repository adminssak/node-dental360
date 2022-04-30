import { Response } from 'express';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ExportFileDto } from './dto/request/export-file-dto';
import { UtilService } from './util.service';
import { parse } from 'json2csv'
@ApiTags('utils')
@Controller({ path: '/utils' })
export class UtilController {
    constructor(private service: UtilService) { }

    @Post('/export-file')
    @ApiBody({
        type: ExportFileDto
    })
    async exportFile(@Body() body: ExportFileDto, @Res() res: Response): Promise<any> {
        const exportData = await this.service.getDataAndExportFile(body.query);
        console.log(exportData);
        var fields = Object.keys(exportData[0]);
        var data = parse(exportData, { fields });
        res.attachment('text.csv');
        return res.send(data);
        // return { status: true }
    }

}