import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  queryField = new FormControl()
  readonly SEACH_URL = 'http://localhost:8082/produto';
  results$: Observable<any>
  readonly fields = "name,category";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
   /*    filter(value => value.lenght > 3),
      debounceTime(200), */
      distinctUntilChanged(),
      tap(value => console.log(value)),
      switchMap(value =>  this.http.get(this.SEACH_URL, {
        params:{
          search: value,
          fields: this.fields
        }
      }))
      );
  }

  onSearch(){
    const fields = "name,category";
    let value = this.queryField.value;
    if(value && (value = value.trim()) !== ''){

      const params_ ={
        search: value,
        fields: fields
      };

      let paramsHttp =  new HttpParams();
      paramsHttp = paramsHttp.set('search', value);
      paramsHttp = paramsHttp.set('fields', fields);

      this.results$ = this.http.get(this.SEACH_URL + {paramsHttp})
      .pipe(
        map((res: any) => res.results)
      );
    }
  }

}
