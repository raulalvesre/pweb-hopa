import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ChangePasswordRequest } from '../interfaces/change-password-request';
import { LoginRequest } from '../interfaces/login-request';
import { NewUserRequest } from '../interfaces/new-user-request';
import { SendRecoveryPasswordEmailRequest } from '../interfaces/send-password-recovery-email-req';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiPath = environment.API + '/auth';

  constructor(private http: HttpClient) {}

  getToken(userLoginReq: LoginRequest): Observable<Object> {
    return this.http
      .post(this.apiPath + '/login', userLoginReq)
      .pipe(take(1));
  }

  registerUser(newUserReq: NewUserRequest): Observable<Object> {
    return this.http
      .post(this.apiPath + '/register', newUserReq)
      .pipe(take(1));
  }

  requestChangePasswordEmail(sendRecoveryPasswordEmailReq: SendRecoveryPasswordEmailRequest): Observable<Object> {
    return this.http
      .post(this.apiPath + '/receive-password-recovery-email', sendRecoveryPasswordEmailReq)
      .pipe(take(1));
  }

  changePassword(changePasswordReq: ChangePasswordRequest): Observable<Object> {
    return this.http
      .put(this.apiPath + '/change-password', changePasswordReq)
      .pipe(take(1));
  }

}
