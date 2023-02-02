import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { StreamItComponent } from './components/stream-it/stream-it.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { OtherReleasesComponent } from './components/other-releases/other-releases.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    HeaderComponent,
    MainComponent,
    StreamItComponent,
    TrackListComponent,
    OtherReleasesComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
