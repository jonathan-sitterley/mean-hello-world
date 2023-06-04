import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PeaksComponent } from './peaks/peaks.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'peaks', component: PeaksComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule { }