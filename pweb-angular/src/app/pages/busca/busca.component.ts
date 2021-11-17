import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductResponse } from 'src/app/shared/interfaces/product-response';
import { ProductService } from 'src/app/shared/services/produce.service';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  products: ProductResponse[];
  nameSearched: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.nameSearched = this.route.snapshot.queryParamMap.get('name');
    const categoria = this.route.snapshot.queryParamMap.get('categoria');
    const apiSearchQuery = {
      url: '?name=' + this.nameSearched
    }

    this.router.events
      .pipe(
        filter(x => x instanceof NavigationEnd),
        startWith(apiSearchQuery),
        map((x: any) => x.url.split('?')[1]),
        switchMap(currentQuery => this.productService.getProducts(currentQuery)),
      ).subscribe(
        (resp: any) => this.products = resp,
        (error) => console.log("deu ruim na hora de pegar os produtos")
      );
    }

}
