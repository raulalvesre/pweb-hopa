import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';
import { LoginRequest } from 'src/app/shared/interfaces/login-request';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JwtTokenService } from 'src/app/shared/services/jwt-token.service';
import { UrlService } from 'src/app/shared/services/url.service';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  apiError: string;
  isLogging: boolean;
  previousUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private jwtTokenService: JwtTokenService,
    private router: Router,
    private location: Location,
    private urlService: UrlService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
    this.isLogging = false;

    this.urlService.previousUrl$.subscribe(
      (url) => {
        this.previousUrl = url;
    });

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ]
      ],
    });
  }

  submit() {
    this.login();
  }

  private login() {
    this.isLogging = true;

    let loginReq: LoginRequest = {
      email: this.form.value['email'],
      password: this.form.value['password']
    };

    this.authService.getToken(loginReq).subscribe(
      (resp: any) => {
        this.jwtTokenService.setToken(resp.token);
        this.snackBar.open(`LOGIN REALIZADO COM SUCESSO`, 'OK', {
          duration: 2000,
        });
        if (this.previousUrl?.startsWith('/recuperar-senha'))
          this.router.navigateByUrl('');
        else
          this.location.back();
      },
      (error) => {
        this.isLogging = false;
        this.apiError = error.error.message;
      }
    )
  }

  openForgotPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '340px',
    });

    dialogRef.afterClosed().subscribe((submitted) => {
      if (submitted) {
        this.snackBar.open(`EMAIL DE RECUPERAÇÃO DE SENHA ENVIADO`, 'OK', {
          duration: 3000,
        });
      }
    });
  }
}
