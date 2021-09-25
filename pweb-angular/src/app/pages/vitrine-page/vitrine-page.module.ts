import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrinePageComponent } from './vitrine-page.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenericCardModule } from 'src/app/components/generic-card/generic-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [VitrinePageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule,
    GenericCardModule,
    FlexLayoutModule
  ],
  exports:[VitrinePageComponent]
})
export class VitrinePageModule { }
