import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(public ApiService: ApiService ) {}
  onSearch = (keyword: string) => {
    this.ApiService.getVideosByKeyword(keyword).subscribe(response => console.log(response))
  };
}
