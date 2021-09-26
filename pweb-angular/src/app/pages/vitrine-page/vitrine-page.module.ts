import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrinePageComponent } from './vitrine-page.component';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [VitrinePageComponent],
  imports: [
    CommonModule,
    GenericCardModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports:[VitrinePageComponent]
})
export class VitrinePageModule { }
