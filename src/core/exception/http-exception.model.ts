export class HttpExceptionModel {
    statusCode?: number;
    message?: string;
    status?: string;
    error?: string;
    errors?: any;
    timestamp?: string;
    path?: string;
    stack?: string;
    
    constructor(
        statusCode: number,
        message: string,
        error: string,
        errors: any,
        path: string,
        stack: string,
    ) {
        this.message = message;
        this.statusCode = statusCode;
        this.status = 'failure';
        this.error = error;
        this.errors = errors;
        this.timestamp = new Date().toISOString();
        this.path = path;
        this.stack = stack;
    }

}