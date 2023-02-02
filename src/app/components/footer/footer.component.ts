import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faTwitter,
  faSpotify,
  faApple,
  faTwitch,
  faFacebook,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
  faSpotify = faSpotify;
  faApple = faApple;
  faTwitch = faTwitch;
  faFacebook = faFacebook;
  faDiscord = faDiscord;
  faArrowRightLong = faArrowRightLong;

  @ViewChild('formEmail') formEmail!: NgForm;

  initForm = {
    email: '',
  };

  submit() {
    this.formEmail.reset({
      email: '',
    });
  }
}
