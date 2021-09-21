import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavBarComponent } from './components/shared/menu-nav-bar/menu-nav-bar.component';
import { GenericCardComponent } from './components/generic/generic-card/generic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavBarComponent,
    GenericCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
