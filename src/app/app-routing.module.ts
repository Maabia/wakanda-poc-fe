import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoComponent } from './features/video/video.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'video'
  },
  {
    path: "video",
    component: VideoComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
