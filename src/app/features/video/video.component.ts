import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from './interfaces/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {


  @Input() video: Video = { id: 1, titulo: '', url: '' }
  titulo: string = '';

  constructor(private sanitazer: DomSanitizer ) { }

  ngOnInit(): void {
  }

  getSanitazedVideoURl() {
    const url = `https://www.youtube.com/embed/${this.video.url}`
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }

}
