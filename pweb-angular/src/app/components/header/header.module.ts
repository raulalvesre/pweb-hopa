import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { SearchBarModule } from '../search-bar/search-bar.module';
import { LogoModule } from '../logo/logo.module';
import { LoginIconModule } from '../login-icon/login-icon.module';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SearchBarModule,
    LoginIconModule,
    LogoModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
