
import { ApiProperty } from '@nestjs/swagger';
import { IsString,  MinLength, MaxLength } from 'class-validator';

export class LoginViaEmailOrPhoneRequestDTO {

	@IsString()
	@ApiProperty({
		example: 'maheshpatnaik99@gmail.com'
	})
	emailOrPhone?: string;

	@IsString()
	@ApiProperty({
		example: 'PRACTICE'
	})
	type: string;

	@IsString()
	// @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
	@MinLength(5)
	@MaxLength(20)
	@ApiProperty({
		example: '123456'
	})
	password!: string;
}
