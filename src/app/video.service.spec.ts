import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { VideoService } from './video.service';

describe('Video Service', () => {
  beforeEachProviders(() => [VideoService]);

  it('should ...',
      inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});
