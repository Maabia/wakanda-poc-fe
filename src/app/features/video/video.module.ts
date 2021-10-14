import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [
    VideoListComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class VideoModule { }
