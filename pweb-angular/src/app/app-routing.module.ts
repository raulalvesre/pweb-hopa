import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './pages/busca/busca.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoDetalhePageComponent } from './pages/produto-detalhe-page/produto-detalhe-page.component';
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
<<<<<<< HEAD
    path: 'detalhe',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: ProdutoDetalhePageComponent }],
    //canActivate: [AuthGuard],
  }
=======
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
>>>>>>> 93c26ff4730008b7d306aa6fecf72b3aa47bd094
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
