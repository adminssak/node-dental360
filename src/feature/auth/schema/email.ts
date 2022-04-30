export interface SendEmail {
    email: string | Array<string>,
    subject: string;
    text: string;
    html: string;
}