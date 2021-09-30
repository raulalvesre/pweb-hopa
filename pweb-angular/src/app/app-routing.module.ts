import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './pages/busca/busca.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { VitrinePageComponent } from './pages/vitrine-page/vitrine-page.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: VitrinePageComponent }],
    //canActivate: [AuthGuard],
  },
  {
    path: 'buscar',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: BuscaComponent }],
  },
  {
    path: 'login',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: LoginComponent }],
    //canActivate: [AuthGuard],
  },
  {
    path: 'cadastro',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: RegistrationComponent }],
    //canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: CartPageComponent }],
    //canActivate: [AuthGuard],
  },
  // {
  //   path: 'detalhe',
  //   component: LayoutComponent,
  //   pathMatch: 'full',
  //   children: [{ path: '', component: CartPageComponent }],
  //   //canActivate: [AuthGuard],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
