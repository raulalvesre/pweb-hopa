import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaPageComponent } from './pages/busca-page/busca-page.component';

const routes: Routes = [{ path: "busca", component: BuscaPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
