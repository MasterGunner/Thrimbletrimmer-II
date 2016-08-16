import { Component } from '@angular/core';
// import { NgForm }    from '@angular/common';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { Video } from '../video';
import { VideoService } from '../video.service';
import { PlayerComponent } from '../player/player.component';

@Component({
  moduleId: module.id,
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.css'],
  directives: [
    PlayerComponent,
    MdInput,
    MdButton,
    MdIcon
  ],
  providers: [MdIconRegistry],
})
export class VideoComponent implements OnActivate {
  video: Video;
  constructor(private router: Router, private service: VideoService) {}

  routerOnActivate(curr: RouteSegment): void {
    let id = curr.getParam('id');
    this.service.getVideo(id).then(video => this.video = video);
  }

  submitted = false;
  onSubmit() { 
    this.submitted = true;
    this.service.submitVideo(this.video);
    this.router.navigate(['/dashboard']);
  }

}
