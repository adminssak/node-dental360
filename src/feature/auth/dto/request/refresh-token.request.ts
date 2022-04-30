import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenRequestDTO {
    @IsString()
    @ApiProperty({})
    refreshToken!: string;
}
