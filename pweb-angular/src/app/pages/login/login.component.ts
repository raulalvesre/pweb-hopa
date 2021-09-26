import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openForgotPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '400px',
      data: {name: 'yourName', animal: 'animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
