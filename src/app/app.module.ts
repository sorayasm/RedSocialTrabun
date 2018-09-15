//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component'; // Muro
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RegisterComponent } from './register/register.component';

// Funcionalidad y estilos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider,} from "angular-6-social-login";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

//Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Animaciones y Material
import { MaterialModule } from './material.module';
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

//Otros
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

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
  {
    path: 'profile',
    component: PerfilComponent
  },
  {
    path: 'profile',
    component: PerfilComponent
  },
  {
    path: "not-found-page", 
    component: NotFoundPageComponent
  }
];

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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HomePageComponent,
    NavbarComponent,
    PerfilComponent,
    NotFoundPageComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFontAwesomeModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    JsonpModule,
    HttpModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
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
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  providers: [ 
    HttpClientModule,
    AuthService,
      {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }

