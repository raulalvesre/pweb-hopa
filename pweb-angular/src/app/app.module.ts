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
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProdutoDetalhePageComponent } from './pages/produto-detalhe-page/produto-detalhe-page.component'
=======
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BuscaComponent } from './pages/busca/busca.component'
import { VitrinePageComponent } from './pages/vitrine-page/vitrine-page.component';
>>>>>>> 93c26ff4730008b7d306aa6fecf72b3aa47bd094

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordDialogComponent,
<<<<<<< HEAD
    ProdutoDetalhePageComponent,
=======
    CartPageComponent,
    VitrinePageComponent,
    BuscaComponent,
>>>>>>> 93c26ff4730008b7d306aa6fecf72b3aa47bd094
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
