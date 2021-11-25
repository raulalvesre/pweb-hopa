import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AddToCartReq } from '../interfaces/add-to-cart-request';
import { UpdateQtdInCartReq } from '../interfaces/update-qtd-in-cart-req';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiPath = environment.API + '/cart';
  qtedItems = new  Subject<void>();

  constructor(
    private http: HttpClient,
    private jwtService: JwtTokenService
    ) {}

  getCartItems(): Observable<Object> {
    return this.http
      .get(this.apiPath)
      .pipe(take(1));
  }

  getQuantityOfItensInCart(): Observable<Object> {
    return this.http
      .get(this.apiPath + '/quantity')
      .pipe(take(1));
  }

  addToCart(productId: number): Observable<Object> {
    const reqBody: AddToCartReq = {
      productId: productId
    };

    return this.http
      .post(this.apiPath, reqBody)
      .pipe(take(1));
  }

  updateProductQtd(productId: number, newQtd: number): Observable<Object> {
    const reqBody: UpdateQtdInCartReq = {
      productId: +productId,
      newQtd: +newQtd
    };

    return this.http
      .put(this.apiPath, reqBody)
      .pipe(take(1));
  }

  deleteProductFromCart(productId: number): Observable<Object> {
    return this.http
      .delete(this.apiPath + '/' + productId)
      .pipe(take(1));
  }

  cleanCart(): Observable<Object> {
    return this.http
      .delete(this.apiPath)
      .pipe(take(1));
  }
}
