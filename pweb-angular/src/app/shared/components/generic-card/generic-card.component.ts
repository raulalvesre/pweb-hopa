import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {
  products =  ["T-Shirt", "Jeans", "Blazer", "Shoes"]
  constructor() { }

  ngOnInit(): void {
  }

}
