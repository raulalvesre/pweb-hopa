import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductResponse } from 'src/app/shared/interfaces/product-response';
import { ProductService } from 'src/app/shared/services/produce.service';

@Component({
  selector: 'app-produto-detalhe-page',
  templateUrl: './produto-detalhe-page.component.html',
  styleUrls: ['./produto-detalhe-page.component.css']
})
export class ProdutoDetalhePageComponent implements OnInit {
  product: ProductResponse;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.getById(+id).subscribe(
      (resp: any) => this.product = resp,
      (error) => console.log("deu ruim na hora de pegar o produto")
    )
  }

}
