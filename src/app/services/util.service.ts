import { Injectable } from '@angular/core';
import * as base from 'dotenv';

base.config;

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public static baseUrl = process.env.BASE_URL;
  public static apiKey = process.env.API_KEY;

  constructor() { }
}
