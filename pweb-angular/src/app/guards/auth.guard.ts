import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { JwtTokenService } from '../shared/services/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private jwtService: JwtTokenService,
    private router: Router) {
    const jwtToken = window.localStorage.getItem('jwt-token');
    if (jwtToken != null)
      this.jwtService.setToken(jwtToken);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = this.jwtService.isTokenValid();
      if (!isLoggedIn) {
        this.router.navigateByUrl('/login');
        return false;
      }

      let currentUserRole = this.jwtService.getTokenInformation()?.role;
      let roleIsAuthorized = route.data.allowedRoles.some((uR: any) => uR == currentUserRole);

      if (roleIsAuthorized)
        return true;

      this.router.navigateByUrl('/login');
      this.matSnackBar.open('Você não tem autorização para acessar essa página', 'OK', { duration: 4000 });
      return false;
  }

}
