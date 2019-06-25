import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {MembersComponent} from './members/members.component';
import {MemberService} from './members/member.service';


export const ROUTES: Routes = [
  {
    path: '', redirectTo: '/user', pathMatch: 'full'
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'members', component: MembersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {enableTracing: true})
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
