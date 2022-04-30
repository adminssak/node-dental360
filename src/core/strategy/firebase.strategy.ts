import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import { auth } from 'firebase-admin';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
			// secretOrKey: appConfig.ACCESS_TOKEN_SECRET,
		});
	}

	async validate(token: string): Promise<any> {
		try {
			console.log(token);
			const decodedToken = await auth().verifyIdToken(token);
			const userId = decodedToken.uid;
			if (!userId) {
				throw new UnauthorizedException();
			}
			return { userId };
		} catch (error) {
			console.log(error);
			throw new UnauthorizedException();
		}
	}
}
