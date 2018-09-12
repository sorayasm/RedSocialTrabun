import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

//Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Welcome
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

