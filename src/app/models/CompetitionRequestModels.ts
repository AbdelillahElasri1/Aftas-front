import { Time } from "@angular/common";

export interface CompetitionRequest {
    code: string,
    date: Date,
    startTime: Time,
    endTime: Time,
    numberOfParticipants: number,
    location: string,
    amount: number
}