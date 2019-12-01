import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Secretes } from '../config/secretes.enum';

const url = Secretes.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<any> {
    return this.http.get(url + 'matches');
  }

  getMatch(competionCode: any): Observable<any> {
    return this.http.get(`${url}/competitions${competionCode}/matches`);
  }

}
