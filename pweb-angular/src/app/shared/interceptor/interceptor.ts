import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { JwtTokenService } from "../services/jwt-token.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private jwtService: JwtTokenService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt: string = this.jwtService.jwtToken;
    if (jwt != null) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`,
        }
      });
    }

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 && jwt != null) {
            this.jwtService.destroyToken();
            this.snackBar.open("Sessão expirada", 'OK', {duration: 2000});
            this.router.navigateByUrl('/login');
          }

          return throwError(error);
        })
      )
  }

}
