import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../interfaces/video';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideosService {


  constructor(
    private http: HttpClient,
  ) { }

  getIdVideos(id: number): Observable<Video>{
    return this.http.get<Video>(`http://localhost:8080/v1/video/${id}`);
  }

}
