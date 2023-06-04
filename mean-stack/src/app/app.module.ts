import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PeaksComponent } from './peaks/peaks.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PeaksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
