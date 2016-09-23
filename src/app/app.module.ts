import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button/button';
import { MdCardModule } from '@angular2-material/card/card';
import { MdCheckboxModule } from '@angular2-material/checkbox/checkbox';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdInputModule } from'@angular2-material/input/input';
import { MdListModule } from '@angular2-material/list/list';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';
import { TimestampPipe } from './timestamp.pipe';
import { PlayerComponent } from './player/player.component';
import { VideoService } from './video.service';
import { routing } from './app.routing';
import { TestCompComponent } from './test-comp/test-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VideoComponent,
    TimestampPipe,
    PlayerComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdToolbarModule.forRoot(),
    routing
  ],
  providers: [
    VideoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
