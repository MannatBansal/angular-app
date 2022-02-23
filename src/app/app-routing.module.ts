import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path:'home',component: HomeComponent,
      },
      {
        path:'about',component: AboutComponent
      },
      {
        path:'contacts',component: ContactsComponent
      },
      {
        path:'profile',component: ProfileComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
