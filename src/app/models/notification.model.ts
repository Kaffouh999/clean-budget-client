export interface Notification {
    id?: number;
    message: string;
    type: TypeNotification;
    dateNotification: string; // ISO 8601 string representation of ZonedDateTime
    lien?: string;
}