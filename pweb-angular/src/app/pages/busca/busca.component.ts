import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductResponse } from 'src/app/shared/interfaces/product-response';
import { ProductService } from 'src/app/shared/services/produce.service';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { SpringFilterQueryBuilder as filterBuilder } from 'spring-filter-query-builder';
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
    this.router.events
      .pipe(
        filter(x => x instanceof NavigationEnd),
        startWith(null),
        map((x: any) => {
          const name = this.route.snapshot.queryParamMap.get('name');
          const category = this.route.snapshot.queryParamMap.get('categoria');
          let searchQ;

          if (name == null && category == null)
            searchQ = '';
          else if (name != null)
            searchQ = filterBuilder.like('name', '*' + name + '*');
          else
            searchQ = filterBuilder.equal('category.id', category);

          return searchQ;
        }),
        switchMap(currentQuery => this.productService.getProducts(currentQuery)),
      ).subscribe(
        (resp: any) => this.products = resp,
        (error) => console.log("deu ruim na hora de pegar os produtos")
      );
  }

}
