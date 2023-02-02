import { Component, Input } from '@angular/core';
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faTwitch,
  faFacebook,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  @Input() public direction?: string;

  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faFacebook = faFacebook;
  faDiscord = faDiscord;
}
