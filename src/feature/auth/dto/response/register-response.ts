import { ApiResponseStatus } from './../../../../shared/enumeration/response-status';
import { ApiBadRequestResponse, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterResponseDto {
    @IsString()
    @ApiProperty({ enum: ApiResponseStatus })
    status: ApiResponseStatus;

    @ApiPropertyOptional()
    error?: any;
}