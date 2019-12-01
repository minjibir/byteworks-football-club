import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

const url = UtilService.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<any> {
    return this.http.get(url + 'matches');
  }
}
