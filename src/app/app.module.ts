import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
