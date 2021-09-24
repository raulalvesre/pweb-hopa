import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderModule } from './components/header/header.module';
import { VitrinePageModule } from './pages/vitrine-page/vitrine-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    VitrinePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
