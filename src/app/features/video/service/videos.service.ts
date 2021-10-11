import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  apiUrl = 'localhost:8080/v1/video';
  //const headers = Headers;

  constructor(
    private httpClient: HttpClient,
  ) { }


  getVideoById(id: number): Observable<Videos> {
    return this.httpClient.get<Videos>(this.apiUrl + id);
  }
}
