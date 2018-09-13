import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

//Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {FormsModule} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//social Login
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider,} from "angular-6-social-login";

const appRoutes: Routes=[
  {path: "homepage", component: HomePageComponent},
  {path: "login", component: LoginComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "register-page", component: RegisterPageComponent},
  {path: "not-found-page", component: NotFoundPageComponent}
]

// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("291977651601728")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("Your-Google-Client-Id")
      },
    ]
);
return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    PerfilComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule
  ],
  providers: [AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
