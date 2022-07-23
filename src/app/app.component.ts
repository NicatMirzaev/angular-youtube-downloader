import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Video } from './models/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  videos: Video[] = [];
  constructor(public ApiService: ApiService ) {}

  onSearch = (keyword: string) => {
    this.ApiService.getVideosByKeyword(keyword).subscribe(response => {
      const items: Video[] = (response as any).items; 
      this.videos = items;
    })
  };
}
