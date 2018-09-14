<<<<<<< HEAD
//Components
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

>>>>>>> upstream/master
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component'; // Muro
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

// Componentes
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Firebase
<<<<<<< HEAD
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
=======
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

>>>>>>> upstream/master
import { AuthService } from './auth.service';

//Animaciones y Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

//Formulario
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

// otros para eliminar errores
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

//Variable de Rutas
const appRoutes: Routes = [
  {
    path : '',
    component : WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'wall',
    component: HomePageComponent
  },
];

// Ng Module
=======
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
        provider: new FacebookLoginProvider("https://trabun-4b6cd.firebaseapp.com/__/auth/handler")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("410021138457-rgvjpro4h6hju7fgltekq2m0k781kre9.apps.googleusercontent.com")
      },
    ]
);
return config;
}
>>>>>>> upstream/master
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    HomePageComponent,
    NavbarComponent,
    PerfilComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
<<<<<<< HEAD
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule, 
    HttpModule
  ],
  providers: [
    AuthService, 
    HttpClientModule 
  ],
=======
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
>>>>>>> upstream/master
  bootstrap: [AppComponent]
})
export class AppModule { }

