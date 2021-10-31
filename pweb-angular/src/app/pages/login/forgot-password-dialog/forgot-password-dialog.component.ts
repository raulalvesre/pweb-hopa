import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.css'],
})
export class ForgotPasswordDialogComponent
  extends BaseFormComponent
  implements OnInit
{
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.email],
        this.isEmailNotRegistered.bind(this),
      ],
    });
  }

  submit() {
    this.dialogRef.close({
      submitted: true
    });
  }

  isEmailNotRegistered(formControl: AbstractControl) {
    return this.userService
      .isEmailAlreadyRegistered(formControl.value)
      .pipe(
        map((emailExists) => (!emailExists ? { notFound: true } : null))
      );
  }
}
