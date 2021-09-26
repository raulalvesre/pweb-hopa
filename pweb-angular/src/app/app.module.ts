import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';


import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotPasswordDialogComponent } from './pages/login/forgot-password-dialog/forgot-password-dialog.component';
import { VitrinePageModule } from './pages/vitrine-page/vitrine-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    VitrinePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
