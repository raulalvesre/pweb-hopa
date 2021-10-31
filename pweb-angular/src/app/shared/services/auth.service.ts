import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginRequest } from '../interfaces/login-request';
import { NewUserRequest } from '../interfaces/new-user-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(userLoginReq: LoginRequest): Observable<Object> {
    return this.http
      .post(environment.API + '/login', userLoginReq)
      .pipe(take(1));
  }

  registerUser(newUserReq: NewUserRequest): Observable<Object> {
    return this.http
      .post(environment.API + '/register', newUserReq)
      .pipe(take(1));
  }

  recoverPassword() {

  }

}
