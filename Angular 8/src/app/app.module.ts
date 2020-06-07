import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderNavComponent } from './menu/header-nav/header-nav.component';
import { EntrepriseServicesComponent } from './entreprise-services/entreprise-services.component';
import { EntrepriseServicesListComponent } from './entreprise-services/entreprise-services-list/entreprise-services-list.component';
import { EntrepriseServicesAddComponent } from './entreprise-services/entreprise-services-add/entreprise-services-add.component';
import { EntrepriseServicesEditComponent } from './entreprise-services/entreprise-services-edit/entreprise-services-edit.component';
import { SidenavBarComponent } from './menu/sidenav-bar/sidenav-bar.component';
import { MaterialModule } from './material/material.module';
import { EntrepriseReclamationsComponent } from './entreprise-reclamations/entreprise-reclamations.component';
import { EntrepriseReclamationsAddComponent } from './entreprise-Reclamations/entreprise-reclamations-add/entreprise-reclamations-add.component';
import { EntrepriseReclamationsListComponent } from './entreprise-Reclamations/entreprise-reclamations-list/entreprise-reclamations-list.component';
import { EntrepriseReclamationsEditComponent } from './entreprise-Reclamations/entreprise-reclamations-edit/entreprise-reclamations-edit.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ForbiddenComponent,
    HeaderNavComponent,
    EntrepriseServicesComponent,
    EntrepriseServicesListComponent,
    EntrepriseServicesAddComponent,
    EntrepriseServicesEditComponent,
    SidenavBarComponent,
    EntrepriseReclamationsComponent,
    EntrepriseReclamationsAddComponent,
    EntrepriseReclamationsListComponent,
    EntrepriseReclamationsEditComponent,
    FrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
