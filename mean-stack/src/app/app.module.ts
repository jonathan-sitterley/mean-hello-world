import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
