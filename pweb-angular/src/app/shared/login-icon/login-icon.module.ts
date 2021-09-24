import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginIconComponent } from './login-icon.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LoginIconComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[LoginIconComponent]
})
export class LoginIconModule { }
