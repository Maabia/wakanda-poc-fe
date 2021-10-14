import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Video } from '../interfaces/video';
import { VideosService } from '../service/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoId: Video;
  videoIndex: number = 0;
  videos: Video[];
  titulo: string = '';
  id: number = 1;

  constructor(
    private videosService: VideosService,
    private sanitazer: DomSanitizer

    ) { }

  ngOnInit(): void {
    this.getVideosById();
  }

  getVideosById() {
    this.videosService.getIdVideos(this.id).subscribe((resp: Video) => {
      this.videoId = resp;
    })
  }

  getSanitazedVideoURl() {
    const url = `https://www.youtube.com/embed/${this.videoId.url}`
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }

  proximo() {
    if (this.id < 98) {
      this.id++
      this.getVideosById();
    } else {
      this.videosService.showMessage('Curso concluído com sucesso!');

    }

  }

  voltar() {
    if (this.id > 1) {
      this.id--
      this.getVideosById();
    }
  }
}
