import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';
import { ChangePasswordRequest } from 'src/app/shared/interfaces/change-password-request';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JwtTokenService } from 'src/app/shared/services/jwt-token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent extends BaseFormComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;
  apiError: String;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.isLoading = false;

    this.form = this.formBuilder.group({
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          this.passwordWithAtLeastOneNumber,
          Validators.maxLength(30),
        ],
      ],
      confirmPassword: [
        null,
        [Validators.required, this.confirmPasswordMatchesPassword.bind(this)],
      ]
    });
  }

  submit() {
    this.changePassword();
  }

  changePassword() {
    let req: ChangePasswordRequest = {
      token: this.route.snapshot.queryParamMap.get('token'),
      newPassword: this.form.value['password']
    };

    this.authService.changePassword(req).subscribe(
      (resp) => {
        this.snackBar.open(`SENHA ALTERADA COM SUCESSO`, 'OK', {
          duration: 2000,
        });
        this.router.navigateByUrl('login');
      },
      (error) => {
        this.apiError = error.message;
        console.log('deu erro na req de mudança de senha')
      }
    )
  }

  private passwordWithAtLeastOneNumber(
    formControl: AbstractControl
  ): { [key: string]: boolean } | null {
    if (!formControl.value) return null;

    if (!/\d/.test(formControl.value))
      return { passwordWithAtLeastOneNumber: true };

    return null;
  }

  private confirmPasswordMatchesPassword(
    formControl: AbstractControl
  ): { [key: string]: boolean } | null {
    const confirmPasswordValue = formControl?.value;
    const passwordValue = this.form?.get('password')?.value;

    if (confirmPasswordValue == null) return null;

    if (confirmPasswordValue === passwordValue) return null;

    return { confirmPasswordDoesNotMatch: true };
  }
}
