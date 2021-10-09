import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';

import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  apiUrl = 'localhost:8080/v1/video';

  constructor(
    private httpClient: HttpClient,
    private sanitazer: DomSanitizer
    ) { }


  getVideos(): Observable<Videos> {
    return this.httpClient.get<Videos>(this.apiUrl);
  }
}
