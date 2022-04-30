import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  Max,
  isUUID,
  IsUUID,
  IsArray,
} from "class-validator";
import { FileTypes } from "./../../../../shared/enumeration/file-type.enum";

export class ImageSlideShowRequestDto {
  @IsOptional()
  @IsArray()
  @ApiPropertyOptional()
  imageObjects: Array<ImageObject>;

  @IsOptional()
  @ApiPropertyOptional()
  audioSource: MediaResponse;
}

export interface ImageObject {
  canvasImageSource: MediaResponse;
  canvasJson: any;
}

export interface MediaResponse {
  status?: string;
  fileType?: string;
  file_type?: string;

  file_id: string;
  extension: string;
  directory: string;
  mimetype?: string;
  mime_type: string;
  name: string;
  size: number;
  url?: string;
  isPublic?: boolean;
}
