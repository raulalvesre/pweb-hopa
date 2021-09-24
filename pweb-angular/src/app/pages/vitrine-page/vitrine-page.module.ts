import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrinePageComponent } from './vitrine-page.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MenuNavBarComponent } from 'src/app/shared/menu-nav-bar/menu-nav-bar.component';



@NgModule({
  declarations: [VitrinePageComponent, MenuNavBarComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[VitrinePageComponent,MenuNavBarComponent]
})
export class VitrinePageModule { }
