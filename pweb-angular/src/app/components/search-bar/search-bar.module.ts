import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { SearchBarComponent } from './search-bar.component';


@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
