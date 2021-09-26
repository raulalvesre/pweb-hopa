import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './components/logo/logo.component';
import { LoginIconComponent } from './components/login-icon/login-icon.component';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const components = [
  LayoutComponent,
  HeaderComponent,
  LogoComponent,
  LoginIconComponent,
  MenuNavBarComponent,
  SearchBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: components,
  exports: components
})
export class SharedModule { }
