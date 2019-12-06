import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Util } from '../utils/util.enum';

const url = Util.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  constructor(private http: HttpClient) { }

  getTable(competitionCode): Observable<any> {
    return this.http.get(`${url}competitions/${competitionCode}/standings`);
  }


}
