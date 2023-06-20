import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PeaksComponent } from './peaks/peaks.component';
import { MongoComponent } from './mongo/mongo.component';
import { DesignComponent } from './design/design.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'peaks', component: PeaksComponent},
  {path: 'mongo', component: MongoComponent},
  {path: 'design', component: DesignComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule { }