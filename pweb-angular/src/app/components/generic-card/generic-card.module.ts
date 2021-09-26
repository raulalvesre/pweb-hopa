import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from './generic-card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [GenericCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [GenericCardComponent]
})
export class GenericCardModule { }
