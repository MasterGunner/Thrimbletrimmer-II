import { Injectable } from '@angular/core';
import { Video } from './video';
import { WUBS } from './mock-video';

@Injectable()
export class VideoService {
  getVideos(): Promise<Video[]> {
    return Promise.resolve(WUBS);
  }
  getVideo(id: string): Promise<Video> {
    return Promise.resolve(WUBS).then(
        videos => videos.filter(video => video.id === id)[0]
    );
  }
  submitVideo(video: Video): void {
    alert(JSON.stringify(video));
  }
}
