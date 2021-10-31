import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  isEmailAlreadyRegistered(email: String): Observable<Object> {
    return this.http
      .get(environment.API + '/users/is-email-registered?email=' + email)
      .pipe(take(1));
  }

  isCpfAlreadyRegistered(cpf: String): Observable<Object> {
    return this.http
      .get(environment.API + '/users/is-cpf-registered?cpf=' + cpf)
      .pipe(take(1));
  }

  isTelephoneAlreadyRegistered(telephone: String): Observable<Object> {
    return this.http
      .get(environment.API + '/users/is-telephone-registered?telephone=' + telephone)
      .pipe(take(1));
  }

}
