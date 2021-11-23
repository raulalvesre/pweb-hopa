import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductResponse } from '../../interfaces/product-response';
import { CartService } from '../../services/cart.service';
import { JwtTokenService } from '../../services/jwt-token.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {
  @Input() product: ProductResponse;

  constructor(
    private cartService: CartService,
    private tokenService: JwtTokenService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  addProductToCart() {
    if (!this.tokenService.isTokenValid()) {
      this.snackBar.open(`VOCÊ PRECISA SE LOGAR PRIMEIRO`, 'OK',{duration: 2000});
      return;
    }

    this.cartService.addToCart(this.product.id).subscribe(
      (resp: any) => {
        this.cartService.qtedItems.next();
        this.snackBar.open(`PRODUTO ADICIONADO AO CARRINHO`, 'OK',{duration: 2000});
    });
  }
}
