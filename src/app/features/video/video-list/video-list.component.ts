import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Videos } from '../interfaces/videos';
import { VideosService } from '../service/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Array<Videos> = [];
  videoIndex: number = 0;
  buttonMessage: string = "PRÓXIMO";
  titulo: string = '';

  videos$!: Observable<Videos[]>;

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videos$ = this.videosService.getVideos();
  }

  getVideoSelecionado(): Videos {
    return this.videos[this.videoIndex];
  }

  proximo() {
    if (this.videoIndex < (this.videos.length)) {
      if ((this.videoIndex + 1) != (this.videos.length))
        this.videoIndex++;
    }

    if (this.videoIndex === (this.videos.length - 1)) {
      this.buttonMessage = "PRÓXIMO";
    }

  }

  voltar() {
    if (this.videoIndex >= 0)
      this.videoIndex--;
  }


}
