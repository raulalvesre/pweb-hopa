import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';

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
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  submit() {
    this.dialogRef.close({
      submitted: true
    });
  }
}
