import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartItemResp } from '../../interfaces/cart-item-resp';
import { CartService } from '../../services/cart.service';
import { JwtTokenService } from '../../services/jwt-token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-gt-sm',
  templateUrl: './header-gt-sm.component.html',
  styleUrls: ['./header-gt-sm.component.css']
})
export class HeaderGtSmComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private jwtTokenService: JwtTokenService,
    private router: Router,
    ) {    }


  ngOnInit() {
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
