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
import { FormErrorMsgComponent } from './components/form-error-msg/form-error-msg.component';
import { HeaderLtMdComponent } from './components/header-lt-md/header-lt-md.component';
import { HeaderGtSmComponent } from './components/header-gt-sm/header-gt-sm.component';

const components = [
  LayoutComponent,
  LogoComponent,
  LoginIconComponent,
  MenuNavBarComponent,
  SearchBarComponent,
  FormErrorMsgComponent,
  HeaderLtMdComponent,
  HeaderGtSmComponent
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
