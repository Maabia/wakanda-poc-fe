import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  apiUrl = `${environment.apiUrl}video`;
  //const headers = Headers;

  constructor(
    private httpClient: HttpClient,
  ) { }


  getVideoById(): Observable<Videos> {
    return this.httpClient.get<Videos>(this.apiUrl);
  }
}
