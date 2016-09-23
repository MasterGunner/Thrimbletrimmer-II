import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  testVal: string;
  video: Video;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private videoService: VideoService) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.testVal = id;
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
