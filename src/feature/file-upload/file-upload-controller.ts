import { ApiResponseStatus } from "./../../shared/enumeration/response-status";
import {
  Controller,
  Post,
  Req,
  Res,
  HttpException,
  HttpStatus,
  Get,
  Param,
} from "@nestjs/common";
import { ApiTags, ApiConsumes, ApiBody } from "@nestjs/swagger";
import { FileUploadService } from "./services/file-upload";
import { Request, Response } from "express";
import { FileUploadResponseDto } from "./dto/response/file-upload-response";
import { FileUploadRequestDto } from "./dto/request/file-upload-request";
import { UrlUploadRequestDto } from "./dto/request/url-upload-request";

@ApiTags("file-upload")
@Controller("file-upload")
export class FileUploadController {
  constructor(private imageUploadService: FileUploadService) {}

  /* ------------------------ Base Upload With  multer-s3-sharp ------------------------ */
  @Post("/upload-s3")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    type: FileUploadRequestDto,
  })
  async uploadFileToAws(
    @Req() request: Request,
    @Res() response: Response
  ): Promise<any> {
    // async uploadFileToAws(@Optional() @Query('isPublic') isPublic: string,@Req() request: Request, @Res() response: Response): Promise<Response<FileUploadResponseDto>> {
    try {
      // if (isPublic === "true") {
      //   return await this.imageUploadService.fileUploadPublic(
      //     request,
      //     response
      //   );
      // } else {
      //   return await this.imageUploadService.fileUpload(request, response);
      // }
      return await this.imageUploadService.fileUploadPublic(
        request,
        response
      );
    } catch (error) {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Unable To Upload" },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /* ------------------------ Base Upload With  multer-s3-sharp ------------------------ */
  @Post("/upload-url-s3")
  @ApiBody({
    type: UrlUploadRequestDto,
  })
  async uploadUrlToAws(
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response<FileUploadResponseDto>> {
    try {
      return await this.imageUploadService.fileUploadUrl(request, response);
    } catch (error) {
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Unable To Upload" },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /* ------------------------ Ger Signed Url By CloudFront ------------------------ */
  @Get("/get-signed-url/:directory/:fileId")
  async getSignedUrl(
    @Param("directory") directory: string,
    @Param("fileId") fileId: string,
    @Res() response: Response
  ): Promise<any> {
    // return await this.imageUploadService.getSignedUrl(fileId, directory, response);
    // if (isPublic === "true") {
    //   return await this.imageUploadService.getSignedUrlPublic(
    //     fileId,
    //     directory,
    //     response
    //   );
    // } else {
    //   return await this.imageUploadService.getSignedUrl(
    //     fileId,
    //     directory,
    //     response
    //   );
    // }
    return this.imageUploadService.getSignedUrlPublic(
      fileId,
      directory,
      response
    );
  }

  /* ------------------------ Delete Url ------------------------ */
  @Get("/delete-file/:directory/:fileId")
  async deleteFile(
    @Param("directory") directory: string,
    @Param("fileId") fileId: string,
    @Res() response: Response
  ): Promise<any> {
    return await this.imageUploadService.deleteFileFromS3(
      fileId,
      directory,
      response
    );
  }

}
