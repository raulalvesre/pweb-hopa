import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AddToCartReq } from '../interfaces/add-to-cart-request';
import { DeleteFromCartReq } from '../interfaces/delete-from-cart-req';
import { UpdateQtdInCartReq } from '../interfaces/update-qtd-in-cart-req';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productList = new BehaviorSubject<any>([]);


  constructor(
    private http: HttpClient,
    private jwtService: JwtTokenService
    ) {}

  getCartItems(): Observable<Object> {
    const userId = +this.jwtService.getTokenInformation().sub;

    return this.http
      .get(environment.API + '/cart/' + userId)
      .pipe(take(1));
  }

  addToCart(productId: number): Observable<Object> {
    const userId = +this.jwtService.getTokenInformation().sub;
    const reqBody: AddToCartReq = {
      productId: productId
    };

    return this.http
      .post(environment.API + '/cart/' + userId, reqBody)
      .pipe(take(1));
  }

  updateProductQtd(productId: number, newQtd: number): Observable<Object> {
    const userId = +this.jwtService.getTokenInformation().sub;
    const reqBody: UpdateQtdInCartReq = {
      productId: +productId,
      newQtd: +newQtd
    };

    return this.http
      .put(environment.API + '/cart/' + userId, reqBody)
      .pipe(take(1));
  }

  deleteProductFromCart(productId: number): Observable<Object> {
    const userId = +this.jwtService.getTokenInformation().sub;

    return this.http
      .delete(environment.API + '/cart/' + userId + '/' + productId)
      .pipe(take(1));
  }

  cleanCart(): Observable<Object> {
    const userId = +this.jwtService.getTokenInformation().sub;

    return this.http
      .delete(environment.API + '/cart/' + userId)
      .pipe(take(1));
  }
}
