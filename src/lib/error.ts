export class APIError extends Error {
    status: any;
    errors: any;
    constructor(message: string, code: any, errors: any) {
        super(message);

        this.message = message;
        this.status = code;
        this.errors = errors;
    }
}