import { Component, OnInit } from '@angular/core';
import { Routes, Router , ROUTER_DIRECTIVES} from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

import { DashboardComponent } from './+dashboard';
import { VideoComponent } from './+video';
import { VideoService } from './video.service';

@Component({
  moduleId: module.id,
  selector: 'thrimbletrimmer-ii-app',
  templateUrl: 'thrimbletrimmer-ii.component.html',
  styleUrls: ['thrimbletrimmer-ii.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdIcon
  ],
  providers: [
    VideoService,
    MdIconRegistry
  ]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/video/:id', component: VideoComponent}
])
export class ThrimbletrimmerIIAppComponent implements OnInit {
  title = 'Thrimbletrimmer II: Trim Harder!';
  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.navigate(['/dashboard']);
  }
}
