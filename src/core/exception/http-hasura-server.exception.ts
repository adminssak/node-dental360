import { HttpException, HttpStatus } from '@nestjs/common';

export class HasuraServerException extends HttpException {
    constructor(error: any) {
        super({ status: "failure", message: error?.response?.error[0]?.message ?? "Hasura Server Down", error }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}