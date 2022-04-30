import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { appConfig } from './../../core/config/app-config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: appConfig.ACCESS_TOKEN_SECRET
		});
	}

	async validate(payload: any): Promise<any> {
		console.log('token');
		const { id } = payload;
		console.log('JwtStrategy -> classJwtStrategyextendsPassportStrategy -> id', id);
		return {
			userId: id
		};
	}
}
