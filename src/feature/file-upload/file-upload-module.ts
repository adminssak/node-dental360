import { FileUploadController } from './file-upload-controller';
import { Module } from '@nestjs/common';
import { FileUploadService } from './services/file-upload';
import { HasuraService } from './../../shared/service/hasura.service';
import { FileUploadRepo } from './repository/file-upload.repo';


@Module({
    controllers: [FileUploadController],
    imports: [

    ],
    providers: [FileUploadService, HasuraService, FileUploadRepo],
    exports: []
})
export class FileUploadModule {

}