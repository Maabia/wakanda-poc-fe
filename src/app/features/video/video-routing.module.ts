import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'video/:id',
    component: VideoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
