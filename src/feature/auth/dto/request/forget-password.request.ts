import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
export class ForgetPasswordDTO {
    @IsEmail()
    @ApiProperty({
        example: 'maheshpatnaik99@gmail.com'
    })
    email!: string;

    @IsString()
    @ApiProperty({
        example: 'a7b58441-7dfe-4550-9aa2-f1d7cbf198cb'
    })
    type!: string;
}