import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Video } from '../interfaces/video';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideosService {


  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getIdVideos(id: number): Observable<Video>{
    return this.http.get<Video>(`http://localhost:8080/v1/video/${id}`);
  }


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
