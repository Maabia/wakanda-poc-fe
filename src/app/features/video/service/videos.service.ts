import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Videos } from '../interfaces/videos';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private API = `${environment.API}video`;

  constructor(private http: HttpClient) { }

  // TERMINAR E FAZER TRATAMENTO DE ERRO
  getVideos() {
    return this.http.get<Videos[]>(this.API)

  }
}
