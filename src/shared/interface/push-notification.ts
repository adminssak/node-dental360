export interface PushNotification {
    data: any,
    token?: string;
    tokens?: Array<string>;
    topic?: string;
}