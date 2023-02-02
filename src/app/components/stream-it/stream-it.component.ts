import { Component } from '@angular/core';
import {
  faBandcamp,
  faSoundcloud,
  faApple,
  faYoutube,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-stream-it',
  templateUrl: './stream-it.component.html',
  styleUrls: ['./stream-it.component.scss'],
})
export class StreamItComponent {
  faBandcamp = faBandcamp;
  faSoundcloud = faSoundcloud;
  faApple = faApple;
  faYoutube = faYoutube;
  faSpotify = faSpotify;
}
