import { Time } from "@angular/common";

export interface CompetitionResponse {
    id: number,
    code: string,
    date: Date,
    startTime: Time,
    endTime: Time,
    numberOfParticipants: number,
    location: string,
    amount: number
}