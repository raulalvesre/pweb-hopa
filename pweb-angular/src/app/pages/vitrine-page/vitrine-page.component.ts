import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/shared/interfaces/product-response';
import { ProductService } from 'src/app/shared/services/produce.service';


@Component({
  selector: 'app-vitrine-page',
  templateUrl: './vitrine-page.component.html',
  styleUrls: ['./vitrine-page.component.css']
})

export class VitrinePageComponent implements OnInit {
  products: ProductResponse[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts('destaque:true').subscribe(
      (resp: any) => this.products = resp,
      (error) => console.log("deu ruim na hora de pegar os produtos em destaque")
    )
  }

}
