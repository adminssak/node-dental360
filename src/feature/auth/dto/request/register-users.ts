import { IsString, IsArray, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class UsersRequestDTO {
    @IsString()
    @ApiProperty({})
    first_name: string;

    @IsString()
    @ApiProperty({  })
    role: string;

    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    phone: string;

    @IsOptional()
    @ApiPropertyOptional()
    employee_id: string;

}
export class RegisterUsersRequestDTO {
    @IsString()
    @ApiProperty({})
    apiKey: string;

    @IsOptional()
    @ApiPropertyOptional({})
    defaultPassword?: string;

    @IsArray()
    @ApiProperty({ type: UsersRequestDTO, isArray: true })
    users: Array<UsersRequestDTO>;
}


export class RegisterAdminUsersRequestDTO {

    @IsOptional()
    @ApiPropertyOptional({})
    defaultPassword?: string;

    @IsArray()
    @ApiProperty({ type: UsersRequestDTO, isArray: true })
    users: Array<UsersRequestDTO>;
}

