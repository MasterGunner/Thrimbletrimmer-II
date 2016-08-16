import { Injectable } from '@angular/core';
import { Video } from './video';
import { WUBS } from './mock-video';


@Injectable()
export class VideoService {
  getVideos() {
    return Promise.resolve(WUBS);
  }
  getVideo(id: string) {
    return Promise.resolve(WUBS).then(
        videos => videos.filter(video => video.id === id)[0]
    );
  }
  submitVideo(video: Video) {
    alert(JSON.stringify(video));
  }
}
