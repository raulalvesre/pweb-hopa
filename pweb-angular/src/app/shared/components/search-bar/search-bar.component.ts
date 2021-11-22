import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  queryField = new FormControl()

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.queryField.setValue(this.route.snapshot.queryParamMap.get("name"));

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
