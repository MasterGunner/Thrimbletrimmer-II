import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videos: Video[] = [];

  constructor(private router: Router, private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos()
      .then(videos => this.videos = videos)
  }

  gotoVideo(video: Video): void {
    let link = ['/video', video.id];
    this.router.navigate(link);
  }
}
