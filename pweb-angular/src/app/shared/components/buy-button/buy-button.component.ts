import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductResponse } from '../../interfaces/product-response';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() product: ProductResponse;

  constructor(
    private cart: CartService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

  }

  addProductToCart(){
    this.cart.addToCart(this.product.id).subscribe((resp: any) => {
      this.snackBar.open(`PRODUTO ADICIONADO AO CARRINHO`, 'OK');
    });
  }
}
