import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video.component';


@NgModule({
  declarations: [
    VideoListComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
