import { Component, OnInit } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {
  qtd: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.qtedItems.pipe(
      startWith(null),
      switchMap(() => this.cartService.getQuantityOfItensInCart())
    ).subscribe(
      (qtdItem: any) => {
        this.qtd = qtdItem
      }
    );
  }

}
