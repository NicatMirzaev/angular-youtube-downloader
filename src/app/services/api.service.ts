import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  BASE_URL: string = "https://www.googleapis.com/youtube/v3/";
  private API_KEY: string = environment.apiKey;

  constructor(public http: HttpClient) { }

  getVideosByKeyword(keyword: string) {
    const URL = `${this.BASE_URL}search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${this.API_KEY}`;
    return this.http.get(URL);
  }
}
