/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoService } from './video.service';

describe('Service: Video', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService]
    });
  });

  it('should ...', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});
