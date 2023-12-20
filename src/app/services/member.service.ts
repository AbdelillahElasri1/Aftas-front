import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberRequest } from '../models/MemberRequestModels';
import { MemberResponse } from '../models/MemberResponseModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  public saveMember(memberRequest: MemberRequest): Observable<MemberRequest>{
    return this.http.post<MemberRequest>(`http://localhost:8080/api/v1/member`, memberRequest);
  }
  public getAllMember(){
    return this.http.get<Array<MemberResponse>>(`http://localhost:8080/api/v1/member`);
  }
  public deleteMember(member: MemberResponse){
    return this.http.delete<any>(`http://localhost:8080/api/v1/member/${member.num}`);
  }
  getAllMembersByCompetitionId(competitionId: number): Observable<MemberResponse[]> {
    return this.http.get<MemberResponse[]>(`http://localhost:8080/api/v1/competition/${competitionId}/members`);
  }
}
