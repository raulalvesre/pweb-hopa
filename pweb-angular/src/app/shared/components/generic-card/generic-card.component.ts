import { Component, OnInit } from '@angular/core';
import { ProductResponse } from '../../interfaces/product-response';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {
  product: ProductResponse;
  products =  ["T-Shirt", "Jeans", "Blazer", "Shoes"]
  constructor() { }

  ngOnInit(): void {
  }

}
