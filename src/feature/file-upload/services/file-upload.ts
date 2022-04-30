/* eslint-disable @typescript-eslint/no-this-alias */
import { FileTypes } from "./../../../shared/enumeration/file-type.enum";
import { FileUploadRepo } from "./../repository/file-upload.repo";
import { FileUploadRequestDto } from "./../dto/request/file-upload-request";
import {
  Injectable,
  Req,
  Res,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import * as multer from "multer";
import s3Storage = require("multer-sharp-s3");
import * as AWS from "aws-sdk";
import { Response, Request } from "express";
import { FileUploadResponseDto } from "../dto/response/file-upload-response";
import { appConfig } from "./../../../core/config/app-config";
import { ApiResponseStatus } from "./../../../shared/enumeration/response-status";
import * as uuid from "uuid";
import * as fs from "fs";
import path = require("path");
import { UrlUploadRequestDto } from "../dto/request/url-upload-request";
import axios from "axios";
import FormData = require("form-data");
const s3 = new AWS.S3({
  accessKeyId: appConfig.AWS_KEY,
  secretAccessKey: appConfig.AWS_SECRET,
});

@Injectable()
export class FileUploadService {
  signer: AWS.CloudFront.Signer;
  fileSizes = {
    [FileTypes.IMAGE]: appConfig.FILE_IMAGE_SIZE,
    [FileTypes.VIDEO]: appConfig.FILE_VIDEO_SIZE,
    [FileTypes.FILE]: appConfig.FILE_SIZE,
  };
  twoDays = 2 * 24 * 60 * 60 * 1000;

  constructor(private fileRepo: FileUploadRepo) {
    const privateKeyPath = "../../../../src/keys/cloudfront-private.key.pem";
    const keyResolvedPath = path.resolve(__dirname, privateKeyPath);
    const privateKey = fs.readFileSync(keyResolvedPath, { encoding: "utf8" });
    this.signer = new AWS.CloudFront.Signer(
      appConfig.AWS_CLOUDFRONT_KEY,
      privateKey
    );
  }

  // Adding Files To Library
  async addFileToLibrary(
    fileDetails: FileUploadResponseDto,
    clientId: string
  ): Promise<void> {
    console.log(clientId);
    const filePayload: any = {
      extension: fileDetails.extension,
      directory: fileDetails.directory,
      name: fileDetails.name,
      size: fileDetails.size,
      file_id: fileDetails.file_id,
      file_type: fileDetails.file_type,
      mime_type: fileDetails.mime_type,
      client_id: clientId,
    };

    this.fileRepo.addFileToLibrary(filePayload);
  }

  /* ------------------- Upload Image Using Multer Sharp S3 ------------------- */
  async fileUpload (
    @Req() req: any,
    @Res() res: Response
  ): Promise<Response<any>> {
    try {
      let directory;
      let body: FileUploadRequestDto;

      /* ------------------------- Multer S3 Sharp Storag e Config ------------------------ */
      const fileUuid = uuid.v4();
      const current = this;
      const multerRequest = multer({
        storage: s3Storage({
          s3: s3,
          ACL: "private",
          resize: {
            options: {
              fit: "contain",
            },
          },
          withMetadata: true,
          Bucket: appConfig.AWS_BUCKET,
          Key: function(_, file, cb) {
            body = JSON.parse(JSON.stringify(req.body));
            directory = body.directory ?? "dental-test";
            cb(null, `uploads360/${directory}/${fileUuid}`);
          },
        }),
        fileFilter: (req, file, cb) => {
          console.log(file.mimetype);
          if (!req.body.fileType) return cb(undefined, true);
          body = JSON.parse(JSON.stringify(req.body));
          const isValidType = current.checkSupportedFiles(
            file.mimetype,
            body.fileType
          );
          const isValidSize = current.checkSupportedFiles(
            file.mimetype,
            body.fileType
          );
          console.log(file.mimetype, file.size, body.fileType);
          if (!isValidType || !isValidSize) {
            return cb(
              new Error(
                !isValidSize ? "File Exceed Size" : "File Type Not Supported"
              )
            ); // if it is then throw an error
          }
          return cb(undefined, true);
        },
      }).array("file", 1);

      multerRequest(req, res, function(error) {
        const body: FileUploadRequestDto = JSON.parse(JSON.stringify(req.body));
        if (error) {
          return res.status(409).json({
            status: ApiResponseStatus.FAILURE,
            message: error.message ?? "Inavlid File",
          });
        }
        const metaData = req.files[0];
        const response: FileUploadResponseDto = {
          extension: metaData?.ContentType,
          file_id: fileUuid,
          mime_type: metaData?.mimetype,
          name: metaData?.originalname,
          size: metaData?.size,
          directory,
          file_type: body.fileType,
          isPublic: false,
        };
        if (body.saveToLibrary) {
          current.addFileToLibrary(response, body.client_id);
        }
        return res
          .status(201)
          .json({ status: ApiResponseStatus.SUCCESS, ...response });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: ApiResponseStatus.FAILURE,
        message: "Unable To Upload",
      });
    }
  }

  async fileUploadPublic(
    @Req() req: any,
    @Res() res: Response
  ): Promise<Response<any>> {
    try {
      let directory;
      let body: FileUploadRequestDto;

      /* ------------------------- Multer S3 Sharp Storag e Config ------------------------ */
      const fileUuid = uuid.v4();
      const current = this;
      const multerRequest = multer({
        storage: s3Storage({
          s3: s3,
          ACL: "public-read",
          resize: {
            options: {
              fit: "contain",
            },
          },
          withMetadata: true,
          Bucket: appConfig.AWS_BUCKET_PUBLIC,
          Key: function(_, file, cb) {
            body = JSON.parse(JSON.stringify(req.body));
            directory = body.directory ?? "dental-test";
            cb(null, `uploads360/${directory}/${fileUuid}`);
          },
        }),
        fileFilter: (req, file, cb) => {
          console.log(file.mimetype);
          if (!req.body.fileType) return cb(undefined, true);
          body = JSON.parse(JSON.stringify(req.body));
          const isValidType = current.checkSupportedFiles(
            file.mimetype,
            body.fileType
          );
          const isValidSize = current.checkSupportedFiles(
            file.mimetype,
            body.fileType
          );
          console.log(file.mimetype, file.size, body.fileType);
          if (!isValidType || !isValidSize) {
            return cb(
              new Error(
                !isValidSize ? "File Exceed Size" : "File Type Not Supported"
              )
            ); // if it is then throw an error
          }
          return cb(undefined, true);
        },
      }).array("file", 1);

      multerRequest(req, res, function(error) {
        const body: FileUploadRequestDto = JSON.parse(JSON.stringify(req.body));
        if (error) {
          return res.status(409).json({
            status: ApiResponseStatus.FAILURE,
            message: error.message ?? "Inavlid File",
          });
        }
        const metaData = req.files[0];
        const response: FileUploadResponseDto = {
          extension: metaData?.ContentType,
          file_id: fileUuid,
          mime_type: metaData?.mimetype,
          name: metaData?.originalname,
          size: metaData?.size,
          directory,
          file_type: body.fileType,
          isPublic: true,
          url: `${appConfig.AWS_BUCKET_PUBLIC_URL}/uploads360/${directory}/${fileUuid}`
        };
        if (body.saveToLibrary) {
          current.addFileToLibrary(response, body.client_id);
        }
        return res
          .status(201)
          .json({ status: ApiResponseStatus.SUCCESS, ...response });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: ApiResponseStatus.FAILURE,
        message: "Unable To Upload",
      });
    }
  }

  // Checking File Supported Types Based On File Type
  checkSupportedFiles(mimeType, fileType: FileTypes): boolean {
    if (fileType === FileTypes.IMAGE) {
      if (appConfig.FILE_IMAGE_SUPPORTED_TYPES.includes(`${mimeType}`)) {
        return true;
      }
      return false;
    } else if (fileType === FileTypes.VIDEO) {
      if (appConfig.FILE_VIDEO_SUPPORTED_TYPES.includes(`${mimeType}`)) {
        return true;
      }
      return false;
    } else if (fileType === FileTypes.FILE) {
      if (appConfig.FILE_SUPPORTED_TYPES.includes(`${mimeType}`)) {
        return true;
      }
      return false;
    }
    return false;
  }

  // Checking File Supported Sized Based On File Type
  checkSupportedSizes(size, fileType: FileTypes): boolean {
    if (fileType === FileTypes.IMAGE) {
      if (size <= appConfig.FILE_IMAGE_SIZE * 1024 * 1024) {
        return true;
      }
      return false;
    } else if (fileType === FileTypes.VIDEO) {
      if (size <= appConfig.FILE_VIDEO_SIZE * 1024 * 1024) {
        return true;
      }
      return false;
    } else if (fileType === FileTypes.FILE) {
      if (size <= appConfig.FILE_SIZE * 1024 * 1024) {
        return true;
      }
      return false;
    }
    return false;
  }

  /* ------------------- Upload Image Using Multer Sharp S3 ------------------- */
  async fileUploadUrl(
    @Req() req: Request,
    @Res() res: Response
  ): Promise<Response<any>> {
    try {
      const body: UrlUploadRequestDto = req.body;
      console.log(body);

      const file = await axios({
        method: "get",
        url: body.url,
        responseType: "stream",
      });

      const formData = new FormData();
      formData.append("file", file.data);
      formData.append("fileType", body.fileType);
      formData.append("directory", body.directory);
      formData.append("client_id", body.client_id);
      if (body.height) formData.append("height", `${body.height}`);
      if (body.width) formData.append("width", `${body.width}`);
      if (body.saveToLibrary)
        formData.append("saveToLibrary", `${body.saveToLibrary}`);
      const formHeaders = formData.getHeaders();

      const response = await axios({
        method: "post",
        data: formData,
        url: `${appConfig.DOMAIN}/api/v1/file-upload/upload-s3`,
        headers: {
          ...formHeaders,
        },
      });
      console.log(response);
      return res.json(response.data);
    } catch (error) {
      console.log("error");
      console.log(error);
      throw new HttpException(
        { status: ApiResponseStatus.FAILURE, message: "Unable To Upload" },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Retrieving Signed Url From cdn(CloudFront)
  async getSignedUrl(
    fileId: string,
    directory: string,
    @Res() res: Response
  ): Promise<Response<any>> {
    try {
      if (fileId && directory) {
        // sign a CloudFront URL that expires 2 days from now
        const signedUrl = this.signer.getSignedUrl({
          url: `http://${appConfig.AWS_CLOUDFRONT_URL}/uploads360/${directory}/${fileId}`,
          expires: Math.floor((Date.now() + this.twoDays) / 1000), // Unix UTC timestamp for now + 2 days
        });

        return res
          .status(200)
          .json({ status: ApiResponseStatus.SUCCESS, url: signedUrl });
      } else {
        return res.status(400).json({
          status: ApiResponseStatus.FAILURE,
          message: "uuid or directory required",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getSignedUrlPublic(
    fileId: string,
    directory: string,
    @Res() res: Response
  ): Promise<Response<any>> {
    try {
      if (fileId && directory) {
        const signedUrl = `${appConfig.AWS_BUCKET_PUBLIC_URL}/uploads360/${directory}/${fileId}`;
        return res
          .status(200)
          .json({ status: ApiResponseStatus.SUCCESS, url: signedUrl });
      } else {
        return res.status(400).json({
          status: ApiResponseStatus.FAILURE,
          message: "uuid or directory required",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Delete File From S3
  async deleteFileFromS3(
    fileId: string,
    directory: string,
    @Res() res: Response
  ): Promise<Response<any>> {
    try {
      if (fileId && directory) {
        const params = {
          Bucket: appConfig.AWS_BUCKET_PUBLIC,
          Key: `uploads360/${directory}/${fileId}`,
        };
        s3.deleteObject(params, (err) => {
          if (err)
            return res.status(500).json({
              status: ApiResponseStatus.FAILURE,
              message: "Unable To Delete",
            });
          return res.status(500).json({
            status: ApiResponseStatus.SUCCESS,
            message: "File Deleted Successfully",
          });
        });
      } else {
        return res.status(400).json({
          status: ApiResponseStatus.FAILURE,
          message: "uuid or directory required",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

}
