import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

}
