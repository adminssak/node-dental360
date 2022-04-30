import { HttpException, HttpStatus } from '@nestjs/common';

export class HasuraQueryException extends HttpException {
    constructor(error) {
        super({ status: "failure", message: error?.response?.error[0]?.message ?? "Hasura Query Error", error }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}