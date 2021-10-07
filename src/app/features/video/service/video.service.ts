import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../interfaces/video';



@Injectable({
  providedIn: 'root'
})
export class VideoService {



  constructor(private httpClient: HttpClient) { }

  getVideos(id: number) {
    return this.http.get<Video[]>(this.API.path.replace("{idVideo}", id))
  }
}
