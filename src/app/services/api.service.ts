import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  BASE_URL: string = 'http://localhost:3000/api'

  constructor(public http: HttpClient) { }

  getVideosByKeyword(keyword: string) {
    const URL = `${this.BASE_URL}/search`;
    return this.http.post(URL, { keyword });
  }
  download(id: string) {
    const URL = `${this.BASE_URL}/download?id=${id}`;
    return this.http.get(URL);
  }
}
