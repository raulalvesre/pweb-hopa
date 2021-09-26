import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaPageComponent } from './pages/busca-page/busca-page.component';
import { LoginComponent } from './pages/login/login.component';
import { VitrinePageComponent } from './pages/vitrine-page/vitrine-page.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: LoginComponent }],
    //canActivate: [AuthGuard],
  },
  {
    path: '',
    component: VitrinePageComponent,
  },
  { path: "busca", component: BuscaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
