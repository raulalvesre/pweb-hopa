import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  queryField = new FormControl()
  readonly SEACH_URL = 'http://localhost:8082/buscar';
  results$: Observable<any>
  readonly fields = "name,category";
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        debounceTime(600),
        distinctUntilChanged(),
      ).subscribe(x => {
          this.router.navigateByUrl("/buscar?name=" + x);
      });
  }

  onSearch(){
    const value = this.queryField.value;
    if (value && value.trim() !== '') {
      this.router.navigateByUrl("/buscar?name=" + value);
    }
  }

}
