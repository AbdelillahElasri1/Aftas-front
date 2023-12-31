import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HuntingRequest } from '../models/HuntingRequestModels';
import { Observable } from 'rxjs';
import { HuntingResponse } from '../models/HuntingResponseModels';
import { FishResponse } from '../models/FishResponseModels';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  constructor(
    private http: HttpClient
  ) { }

  // TODO: add logic and crud method 
    public saveHunting(hunting: HuntingRequest): Observable<HuntingRequest>{
      return this.http.post<HuntingRequest>(`http://localhost:8080/api/v1/hunting`, hunting);
    }
    public getAllHuning() : Observable<HuntingResponse[]>{
      return this.http.get<Array<HuntingResponse>>(`http://localhost:8080/api/v1/hunting`);
    }



    // endpoint for get all fish 
    public getAllfish(): Observable<FishResponse[]>{
      return this.http.get<Array<FishResponse>>(`http://localhost:8080/api/v1/fish`);
    }
}
