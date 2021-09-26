import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  ngOnInit(): void {
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
    this.snackBar.open(`O BACKEND AINDA NÃO EXISTE`, 'OK', {
      duration: 3000,
    });
  }

  openForgotPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '340px',
    });

    dialogRef.afterClosed().subscribe((submitted) => {
      if (submitted) {
        this.snackBar.open(`O BACKEND AINDA NÃO EXISTE`, 'OK', {
          duration: 3000,
        });
      }
    });
  }
}
