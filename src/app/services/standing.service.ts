import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Secretes } from '../config/secretes.enum';

const url = Secretes.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  constructor(private http: HttpClient) { }

  getTable(competitionCode): Observable<any> {
    return this.http.get(`${url}competitions/${competitionCode}/standings`);
  }


}
