import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../interfaces/video';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  // CORRIGIR
  getVideos(id: string) {
    return this.httpClient.get<Video[]>(environment.WakandaVideo.video.replace("{idVideo}", id));
  }
}
