import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterViaEmailRequestDTO {
	@IsEmail()
	@ApiProperty({
		example: 'snp@gmail.com'
	})
	email!: string;

	@IsString()
	// @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
	@MinLength(8)
	@MaxLength(20)
	@ApiProperty({
		example: 'Ast@2019'
	})
	password!: string;
}
