import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private apiLoaded = false;
  @Input() video!: Video

  constructor(public ApiService: ApiService) { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'httpS://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  handleDownload(videoId: string, type: string) {
    console.log(videoId, type);
  }

}
