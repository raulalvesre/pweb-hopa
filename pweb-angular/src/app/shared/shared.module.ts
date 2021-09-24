import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LoginIconComponent } from './components/login-icon/login-icon.component';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  LogoComponent,
  LoginIconComponent,
  MenuNavBarComponent,
  SearchBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components
})
export class SharedModule { }
