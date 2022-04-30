import { ApiProperty } from '@nestjs/swagger';
export class ChangePasswordDTO {
    
    @ApiProperty({
        example: '123456'
    })
    oldPassword?: string;

    @ApiProperty({
        example: '123456'
    })
    newPassword: string;

    @ApiProperty({
        example: 'a7b58441-7dfe-4550-9aa2-f1d7cbf198cb'
    })
    user_id: string;
}