import { ApiProperty } from '@nestjs/swagger';

export class RoleIdInput {
    @ApiProperty({
        example: 'd5cf3fc5-297d-47b7-bd33-a698f053e3fb'
    })
    role_id: string;

}