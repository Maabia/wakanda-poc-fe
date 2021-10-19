import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './features/video/video-list/video-list.component';

const routes: Routes = [
  {
    path: 'video',
    loadChildren: () => import('./features/video/video.module').then(m => m.VideoModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
