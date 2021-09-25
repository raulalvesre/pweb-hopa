import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrinePageComponent } from './vitrine-page.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  declarations: [VitrinePageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule
  ],
  exports:[VitrinePageComponent]
})
export class VitrinePageModule { }
