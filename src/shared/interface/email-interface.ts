export interface EmailInterface {
    email: string | Array<string>,
    subject: string;
    text: string;
    html: string;
}