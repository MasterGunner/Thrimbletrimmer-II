import { Component, Input, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { Video } from '../video';
import { Timestamp } from '../timestamp.pipe'

@Component({
  moduleId: module.id,
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css'],
  directives: [MdButton, MdCheckbox, MdIcon],
  providers: [MdIconRegistry],
  pipes: [Timestamp]
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
