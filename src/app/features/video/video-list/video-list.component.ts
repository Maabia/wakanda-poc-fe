import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Video } from '../interfaces/video';
import { VideosService } from '../service/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoId: Video;
  videos: Video[];
  titulo: string = '';
  id: number = 1;
  url: string = 'https://www.youtube.com/embed/';

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

  getSanitazedVideoURl(): SafeResourceUrl {
    return this.sanitazer.bypassSecurityTrustResourceUrl(this.url + this.getVideoIdYouTube());
  }

  getVideoIdYouTube(): String {
    if (this.videoId) {
      return this.videoId.url;
    } else {
      return '';
    }
  }

  getVideoTitulo(): String {
    if (this.videoId) {
      return this.videoId.titulo;
    } else {
      return '';
    }
  }

  proximo() {
    if (this.id < 98) {
      this.id++
      this.getVideosById();
    } else {
      this.videosService.showMessage('Curso concluído com sucesso!');
      // TODO: POSSO ADICIONAR ROTA PARA OUTRA TELA AQUI
    }
  }

  voltar() {
    if (this.id > 1) {
      this.id--
      this.getVideosById();
    }
  }
}
