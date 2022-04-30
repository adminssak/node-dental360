import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ExportFileDto {
    @IsNotEmpty()
    @ApiProperty()
    query!: string
}
