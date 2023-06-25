import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PeaksComponent } from './peaks/peaks.component';
import { UsersComponent } from './users/users.component';
import { DesignComponent } from './design/design.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'peaks', component: PeaksComponent},
  {path: 'users', component: UsersComponent},
  {path: 'design', component: DesignComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule { }