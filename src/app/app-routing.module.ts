import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BookTimeComponent } from './book-time/book-time.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InfoComponent },
  { path: 'book-time', component: BookTimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, BookTimeComponent, InfoComponent]
