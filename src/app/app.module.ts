import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { VideoModule } from './features/video/video.module';
import { HttpClientModule } from '@angular/common/http';
import { VideosService } from './features/video/service/videos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CoreModule,
    CommonModule,
    VideoModule,
    HttpClientModule
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
