import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private API = `${environment.API}video`;

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Videos[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }
}
