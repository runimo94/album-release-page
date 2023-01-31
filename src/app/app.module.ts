import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, SocialComponent, HeaderComponent, MainComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
