import { ApiProperty } from '@nestjs/swagger';

export class TokenInput {
    @ApiProperty({
        example: 'abc'
    })
    token: string;
}