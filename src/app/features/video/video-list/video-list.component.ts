import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  url: string;

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
    const urlSafe = `https://www.youtube.com/embed/${this.videoId.url}`
    return this.sanitazer.bypassSecurityTrustResourceUrl(urlSafe);
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
