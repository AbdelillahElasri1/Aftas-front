import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompetitionResponse } from '../models/CompetitionResponseModels';
import { Observable } from 'rxjs';
import { CompetitionRequest } from '../models/CompetitionRequestModels';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }
  public getAllCompetitions(){
    return this.http.get<Array<CompetitionResponse>>("http://localhost:8080/api/v1/competition");
  }
  getCompetitions(page: number, size: number) : Observable<CompetitionResponse[]>{
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<CompetitionResponse[]>(`http://localhost:8080/api/v1/competition`, {params});
  }
  public getCompetition(competition : CompetitionResponse) : Observable<CompetitionResponse>{
    return this.http.get<CompetitionResponse>(`http://localhost:8080/api/v1/competition/${competition.id}`);
  }
  public deleteProduct(competition : CompetitionResponse){
    return this.http.delete<any>(`http://localhost:8080/api/v1/competition/${competition.id}`);
  }
  public saveProduct(competition: CompetitionRequest): Observable<CompetitionRequest>{
    return this.http.post<CompetitionRequest>(`http://localhost:8080/api/v1/competition`, competition);
  }
}
