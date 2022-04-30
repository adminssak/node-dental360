import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  Max,
  isUUID,
  IsUUID,
} from "class-validator";
import { FileTypes } from "./../../../../shared/enumeration/file-type.enum";

export class FileUploadRequestDto {
  
  @ApiProperty({
    format: "binary",
    type: "string",
  })
  file!: string;

  @IsNotEmpty()
  @ApiProperty({ enum: FileTypes, default: FileTypes.IMAGE })
  fileType!: FileTypes;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "image" })
  directory: string;

  @IsNotEmpty()
  @ApiProperty({ example: "ac3b48cd-1183-47d7-89eb-d97137f190c9" })
  client_id: string;

  @IsOptional()
  @ApiPropertyOptional()
  height: number;

  // @IsOptional()
  // @ApiPropertyOptional()
  // isPublic: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  width: number;

  // @IsOptional()
  // @Max(99)
  // @ApiPropertyOptional()
  // qualityPercentage: number;

  @IsOptional()
  @ApiPropertyOptional()
  thumbnailRequired: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  thumbnailHeight: number;

  @IsOptional()
  @ApiPropertyOptional()
  thumbnailWidth: number;

  @IsOptional()
  @ApiPropertyOptional()
  saveToLibrary: boolean;
  
}
