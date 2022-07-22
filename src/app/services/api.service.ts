import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiKey: string = '';
  constructor(public http: HttpClient) { }

  search(keyword: string) {
    
  }
}
