import { ApiProperty } from '@nestjs/swagger';
import { IsJWT } from 'class-validator';

export class LoginViaFirebaseTokenDTO {
	@IsJWT()
	@ApiProperty({
		example: 'JWT'
	})
	token!: string;
}
