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
  loading: boolean = false;
  constructor(public ApiService: ApiService ) {}

  onSearch = (keyword: string) => {
    this.loading = true;
    this.ApiService.getVideosByKeyword(keyword).subscribe(response => {
      if((response as any).success) {
        const items: Video[] = (response as any).data; 
        this.videos = items;
        this.loading = false;
      }
    })
  };
}
