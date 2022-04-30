import { FileTypes } from './../../../../shared/enumeration/file-type.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FileUploadResponseDto {
    @ApiProperty({
        example: '037f4b1bde662887ef26364aa9152d55'
    })
    file_id!: string;
    @ApiProperty({
        example: '037f4b1bde662887ef26364aa9152d55'
    })
    name!: string;

    @ApiProperty({
        example: 23455
    })
    size!: number;

    @ApiProperty({
        example: 'image/png'
    })
    mime_type!: string;


    @ApiProperty({
        example: 'png'
    })
    extension!: string;


    @ApiProperty({
        example: FileTypes.IMAGE,
        enum: FileTypes
    })
    file_type!: FileTypes;

    @ApiProperty({
        example: 'images'
    })
    directory!: string;

    @ApiProperty({
        example: 'true'
    })
    isPublic: boolean;

    @ApiPropertyOptional({
        example: 'https://backend-api-dev-test.s3.ap-south-1.amazonaws.com/1599746989574%20-%20logo.png'
    })
    url?: string;



}