import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeaksComponent } from './peaks/peaks.component';
import { UsersComponent } from './users/users.component';
import { DesignComponent } from './design/design.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeaksComponent,
    UsersComponent,
    DesignComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
