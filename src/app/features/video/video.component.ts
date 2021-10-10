import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Videos } from './interfaces/videos';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  // PARA TESTE
  @Input() video: Videos = { id: 0 , titulo: '', url: '' }


  constructor(private sanitazer: DomSanitizer ) { }

  ngOnInit(): void {
  }


  getSanitazedVideoURl() {
    const url = `https://www.youtube.com/embed/${this.video.url}`
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }

}
