import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LoginIconModule } from 'src/app/shared/login-icon/login-icon.module';
import { LogoModule } from 'src/app/shared/logo/logo.module';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';


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
