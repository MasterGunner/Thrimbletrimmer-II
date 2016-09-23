import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from '../video';
import { VideoService } from '../video.service';
import { PlayerComponent } from '../player/player.component';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video: Video;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private videoService: VideoService) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.videoService.getVideo(id).then(video => this.video = video);
    })
  }

  submitted = false;
  onSubmit() { 
    this.submitted = true;
    this.videoService.submitVideo(this.video);
    this.router.navigate(['/dashboard']);
  }
}
