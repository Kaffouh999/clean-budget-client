import { Employe } from "./employe.model";

export interface NotificationEmploye {
    id?: number;
    vue: boolean;
    dateVue?: string; // ISO 8601 string representation of ZonedDateTime
    notification: Notification;
    employe: Employe;
}