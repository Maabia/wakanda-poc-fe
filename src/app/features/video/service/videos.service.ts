import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  //apiUrl = `${environment.apiUrl}video`;
  API = 'http://localhost:8080/v1/video/{idVideo}';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getVideos(id: number): Observable<Videos[]> {
    return this.httpClient.get<Videos[]>(this.API + id);
  }

}
