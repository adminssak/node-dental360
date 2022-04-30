import { ApiProperty } from '@nestjs/swagger';

export class RoleNameInput {

    @ApiProperty({
        example: 'd5cf3fc5-297d-47b7-bd33-a698f053e3fb'
    })
    name: string;

    onlyHim?: boolean;
    
}