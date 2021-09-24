import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavBarComponent } from './menu-nav-bar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [MenuNavBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[MenuNavBarComponent]
})
export class MenuNavBarModule { }
