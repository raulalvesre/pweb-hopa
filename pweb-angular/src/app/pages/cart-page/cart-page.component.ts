import { Component, OnInit } from '@angular/core';

interface Transaction {
  item: string;
  quantidade: number
  cost: number;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent{
  displayedColumns: string[] = ['item', 'quantidade', 'cost'];
  transactions: Transaction[] = [
    {item: 'Camiseta', quantidade: 2, cost: 24},
    {item: 'Calça', quantidade: 1, cost: 22},

  ];
  constructor() { }

  ngOnInit(): void {
  }
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  getTotalQuantity() {
    return this.transactions.map(t => t.quantidade).reduce((acc, value) => acc + value, 0);
  }

}
