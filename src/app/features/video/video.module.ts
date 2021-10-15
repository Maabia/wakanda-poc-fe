import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    VideoListComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class VideoModule { }
