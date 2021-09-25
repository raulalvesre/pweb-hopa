import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderModule } from './components/header/header.module';
import { VitrinePageComponent } from './pages/vitrine-page/vitrine-page.component';
import { BuscaPageComponent } from './pages/busca-page/busca-page.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VitrinePageComponent,
    BuscaPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
