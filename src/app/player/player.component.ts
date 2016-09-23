import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../video';
import { TimestampPipe } from '../timestamp.pipe'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() video: Video;
  endCheck: boolean = false; 

  ngOnInit() {
    (<HTMLVideoElement>document.getElementById('wub-video-tag')).currentTime = this.video.start;
  }
  
  updateDisplayTime(player: HTMLVideoElement) {
    if (this.endCheck && player.currentTime >= this.video.end) {
        player.pause();
        player.currentTime = this.video.end;
    }
  }
}
