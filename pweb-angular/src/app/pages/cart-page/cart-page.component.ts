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
    {item: 'Beach ball', quantidade: 1, cost: 4},
    {item: 'Towel', quantidade: 3, cost: 5},
    {item: 'Frisbee',quantidade: 2, cost: 2},
    {item: 'Sunscreen',quantidade: 4, cost: 4},
    {item: 'Cooler',quantidade: 1, cost: 25},
    {item: 'Swim suit',quantidade: 1, cost: 15},
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
