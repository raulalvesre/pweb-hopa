import { Component, OnInit } from '@angular/core';
import { CartItemResp } from 'src/app/shared/interfaces/cart-item-resp';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent {
  displayedColumns: string[] = ['imagem', 'item', 'quantidade', 'cost'];
  cartItems: CartItemResp[];

  constructor(
    private cartService: CartService
  ) {
    this.cartService.getCartItems().subscribe(
      (resp: any) => this.cartItems = resp,
      (error) => console.log("deu ruim na hora de pegar os cart itens")
    );
  }

  ngOnInit(): void {
  }

  getTotalQuantity(): number {
    return this.cartItems
      ?.map(x => x.quantidade)
      .reduce((acc, curr) => acc + curr);
  }

  getTotalCost(): number {
    return this.cartItems
      ?.map(x => x.valorTotal)
      .reduce((acc, curr) => acc + curr);
  }
}
