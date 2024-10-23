import { Component } from '@angular/core';
interface RelatedVideo {
  title: string;
  thumbnail: string;
  url: string;
}
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {

}
