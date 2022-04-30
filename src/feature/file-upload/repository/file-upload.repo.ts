import { FileLibrary } from './../schema/file-library';
import { Injectable } from '@nestjs/common';
import { HasuraService } from '../../../shared/service/hasura.service';


@Injectable()
export class FileUploadRepo {
    constructor(
        private hasuraService: HasuraService,
    ) { }

    /* ----------------------- Adding File To Library ---------------------- */
    async addFileToLibrary(fileDetails: FileLibrary): Promise<any> {
        const operationsDoc = `
    mutation addFileToLibrary($fileDetails:library_files_insert_input!){
        insert_library_files_one(object:$fileDetails){
          id
        }
      }
    `;
        return this.hasuraService.request(operationsDoc, { fileDetails });
    }
    //
}