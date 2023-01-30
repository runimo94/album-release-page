import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, SocialComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
