import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';
import { TestCompComponent } from './test-comp/test-comp.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'test-comp/:id',
    component: TestCompComponent
  },
  {
    path: 'video/:id',
    component: VideoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);