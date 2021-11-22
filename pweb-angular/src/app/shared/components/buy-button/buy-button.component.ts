import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductResponse } from '../../interfaces/product-response';
import { CartService } from '../../services/cart.service';
import { HeaderGtSmComponent } from '../header-gt-sm/header-gt-sm.component';


@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() product: ProductResponse;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

  }

  addProductToCart(){
    this.cartService.addToCart(this.product.id).subscribe((resp: any) => {
      this.snackBar.open(`PRODUTO ADICIONADO AO CARRINHO`, 'OK');
    });
  }
}
