import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideosService {


  constructor(
    private http: HttpClient,
  ) { }

  getIdVideos(id: number): Observable<Videos>{
    return this.http.get<Videos>(`https://localhost:8080/v1/video/${id}`);
  }

}
