import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

/* Auth service */
import { AuthenticationService } from './shared/authentication.service';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookTimeComponent } from './book-time/book-time.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
