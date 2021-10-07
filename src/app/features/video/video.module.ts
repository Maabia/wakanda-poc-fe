import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VideoListComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class VideoModule { }
