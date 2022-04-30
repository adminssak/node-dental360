import { NotificationType } from '../enums/notification-type.enum';

export interface Notification {
    user_id?: string;
    type: NotificationType,
    payload?: any;
    read?: boolean;
    title: string;
    body: string;
    image?: any;
}