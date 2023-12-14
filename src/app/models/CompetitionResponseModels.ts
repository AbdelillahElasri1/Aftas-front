import { Time } from "@angular/common";

export interface CompetitionResponse {
showDetailsPopup: any;
showPopup: any;
    id: number,
    code: string,
    date: Date,
    startTime: Time,
    endTime: Time,
    numberOfParticipants: number,
    location: string,
    amount: number,
    howDetailsPopup?: boolean;
}