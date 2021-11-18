import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtTokenService } from '../../services/jwt-token.service';

@Component({
  selector: 'app-header-gt-sm',
  templateUrl: './header-gt-sm.component.html',
  styleUrls: ['./header-gt-sm.component.css']
})
export class HeaderGtSmComponent implements OnInit {
  isLoggedIn: boolean;
  queryField: FormControl;

  constructor(
    private snackBar: MatSnackBar,
    private jwtTokenService: JwtTokenService,
    private router: Router) { }

  ngOnInit() {
    this.queryField = new FormControl(null,);
    this.queryField.valueChanges.subscribe(x => console.log(x));

    this.isLoggedIn = this.jwtTokenService.isTokenValid();

    if (this.router.url == '/login' && this.isLoggedIn) {
      this.snackBar.open(`VOCÊ JÁ ESTÁ LOGADO`, 'OK', {
        duration: 2000,
      });
      this.router.navigateByUrl('');
    }
  }

  logOut() {
    this.jwtTokenService.destroyToken();
    this.isLoggedIn = false;
    this.snackBar.open(`DESLOGADO COM SUCESSO`, 'OK', {
      duration: 2000,
    });
    this.router.navigateByUrl('');
  }
}
