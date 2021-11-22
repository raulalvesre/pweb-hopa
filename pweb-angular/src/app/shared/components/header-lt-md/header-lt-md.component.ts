import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtTokenService } from '../../services/jwt-token.service';

@Component({
  selector: 'app-header-lt-md',
  templateUrl: './header-lt-md.component.html',
  styleUrls: ['./header-lt-md.component.css'],
})
export class HeaderLtMdComponent {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  isLoggedIn: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private jwtTokenService: JwtTokenService,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.jwtTokenService.isTokenValid();

    if (this.router.url == '/login' && this.isLoggedIn) {
      this.snackBar.open(`VOCÊ JÁ ESTÁ LOGADO`, 'OK', {
        duration: 2000,
      });
      this.router.navigateByUrl('');
    }
  }

  toggle() {
    this.sidenav.emit();
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
