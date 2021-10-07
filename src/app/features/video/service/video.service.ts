import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../interfaces/video';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private API = `${environment.API}video`;

  constructor(private http: HttpClient) { }

  // CORRIGIR
  getVideos() {
    return this.http.get<Video[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }
}
