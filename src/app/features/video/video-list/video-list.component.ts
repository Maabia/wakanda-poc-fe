import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private videos: Array<Video> = [];
  videoIndex: number = 0;
  buttonMessage: string = "PRÓXIMO";
  titulo: string = '';

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {

  }

  getVideoSelecionado(): Video {
    return this.videos[this.videoIndex];
  }

  proximo() {
    if (this.videoIndex < (this.videos.length)) {
      if ((this.videoIndex + 1) != (this.videos.length))
        this.videoIndex++;
    }
  }

  voltar() {
    if (this.videoIndex >= 0)
      this.videoIndex--;
  }


}
