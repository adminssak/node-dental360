import { appConfig } from './../../core/config/app-config';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class HasuraWebHookGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        if (appConfig.WEBHOOK_HASURA_SECRET_KEY === request.headers.webhook_hasura_secret_key) {
            return true;
        }
        return true;
    }
}