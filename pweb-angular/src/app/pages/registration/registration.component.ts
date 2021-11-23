import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';
import { LoginRequest } from 'src/app/shared/interfaces/login-request';
import { NewUserRequest } from 'src/app/shared/interfaces/new-user-request';
import { Regexes } from 'src/app/shared/regexes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JwtTokenService } from 'src/app/shared/services/jwt-token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent extends BaseFormComponent implements OnInit {
  form: FormGroup;
  isRegistering: boolean;
  apiError: String;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private userService: UserService,
    private jwtTokenService: JwtTokenService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.isRegistering = false;

    this.form = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.pattern(Regexes.NAME),
          Validators.minLength(3),
          Validators.maxLength(256),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        this.isEmailAlreadyRegistered.bind(this),
      ],
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
      ],
      cpf: [
        null,
        [Validators.required, Validators.pattern(Regexes.CPF)],
        this.isCpfAlreadyRegistered.bind(this),
      ],
      telephone: [
        null,
        [Validators.required, Validators.pattern(Regexes.TELEPHONE)],
        this.isTelephoneAlreadyRegistered.bind(this),
      ],
    });
  }

  submit() {
    this.registerUser();
  }

  private async registerUser() {
    this.isRegistering = true;

    await new Promise(resolve => setTimeout(resolve, 4000));

    let newUserReq: NewUserRequest = {
      name: this.form.value['name'],
      email: this.form.value['email'],
      password: this.form.value['password'],
      cpf: this.form.value['cpf'],
      telephone: this.form.value['telephone'],
    };

    this.authService
      .registerUser(newUserReq)
      .pipe(
        switchMap((resp: any) => {
          let logReq: LoginRequest = {
            email: this.form.value['email'],
            password: this.form.value['password'],
          };

          return this.authService.getToken(logReq);
        }),
        catchError((err: any) => {
          console.log('deu ruim', err);
          return throwError(err);
        })
      )
      .subscribe(
        (resp: any) => {
          this.jwtTokenService.setToken(resp.token);
          this.snackBar.open(`CADASTRO REALIZADO COM SUCESSO`, 'OK', {
            duration: 2000,
          });
          this.router.navigateByUrl('');
        }
      );
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

  isEmailAlreadyRegistered(formControl: AbstractControl) {
    return this.userService
      .isEmailAlreadyRegistered(formControl.value)
      .pipe(
        map((emailExists) => (emailExists ? { alreadyRegistered: true } : null))
      );
  }

  isCpfAlreadyRegistered(formControl: AbstractControl) {
    return this.userService
      .isCpfAlreadyRegistered(formControl.value)
      .pipe(
        map((cpfExists) => (cpfExists ? { alreadyRegistered: true } : null))
      );
  }

  isTelephoneAlreadyRegistered(formControl: AbstractControl) {
    return this.userService
      .isTelephoneAlreadyRegistered(formControl.value)
      .pipe(
        map((telephoneExists) => (telephoneExists ? { alreadyRegistered: true } : null))
      );
  }
}
