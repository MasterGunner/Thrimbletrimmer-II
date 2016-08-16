import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnActivate {
  videos: Video[];
  constructor(private router: Router, private service: VideoService) {}

  routerOnActivate(curr: RouteSegment,
                  prev?: RouteSegment,
                  currTree?: RouteTree,
                  prevTree?: RouteTree) {
    this.service.getVideos().then(videos => this.videos = videos);
  }

  gotoVideo(video: Video) {
    this.router.navigate(['/video', video.id]);
  }

}
