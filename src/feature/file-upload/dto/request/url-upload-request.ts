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

export class UrlUploadRequestDto {
  @IsNotEmpty()
  @ApiProperty({
    type: "string",
  })
  url!: string;

  @IsNotEmpty()
  @ApiProperty({ enum: FileTypes, default: FileTypes.IMAGE })
  fileType!: FileTypes;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "image" })
  directory: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ example: "8d0af344-d9de-4f20-9bdc-abc02d73b2ae" })
  client_id: string;

  @IsOptional()
  @ApiPropertyOptional()
  height: number;

  @IsOptional()
  @ApiPropertyOptional()
  width: number;

  // @IsOptional()
  // @Max(99)
  // @ApiPropertyOptional()
  // qualityPercentage: number;

  @IsOptional()
  @ApiPropertyOptional()
  saveToLibrary: boolean;
}
