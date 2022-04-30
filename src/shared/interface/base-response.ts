import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseStatus } from '../enumeration/response-status';

export class BaseResponse {
    @ApiProperty({ example: "string" })
    message?: string;
    @ApiProperty({ example: "success", enum: ApiResponseStatus })
    status: ApiResponseStatus;
}