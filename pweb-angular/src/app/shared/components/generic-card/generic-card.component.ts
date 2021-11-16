import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from '../../interfaces/product-response';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {
  @Input() product: ProductResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
