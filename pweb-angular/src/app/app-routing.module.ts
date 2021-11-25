import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BuscaComponent } from './pages/busca/busca.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoDetalhePageComponent } from './pages/produto-detalhe-page/produto-detalhe-page.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { VitrinePageComponent } from './pages/vitrine-page/vitrine-page.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { Interceptor } from './shared/interceptor/interceptor';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: VitrinePageComponent }],
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
  },
  {
    path: 'cadastro',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: RegistrationComponent }],
  },
  {
    path: 'detalhe/:id',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: ProdutoDetalhePageComponent }],
  },
  {
    path: 'carrinho',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: CartPageComponent }],
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['user'],
    },
  },
  {
    path: 'recuperar-senha',
    component: LayoutComponent,
    pathMatch: 'full',
    children: [{ path: '', component: RecoverPasswordComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
export class AppRoutingModule { }
