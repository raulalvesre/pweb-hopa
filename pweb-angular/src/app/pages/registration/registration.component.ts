import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form-component/base-form-component';
import { Regexes } from 'src/app/shared/regexes';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BaseFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(Regexes.NAME), Validators.minLength(3), Validators.maxLength(256)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: [null, [Validators.required, this.confirmPasswordMatchesPassword.bind(this)]],
      cpf: [null, [Validators.required, Validators.pattern(Regexes.CPF)]],
      telephone: [null, [Validators.required, Validators.pattern(Regexes.TELEPHONE)]]
    });
  }

  submit() {
    throw new Error('Method not implemented.');
  }

  private confirmPasswordMatchesPassword(formControl: AbstractControl): { [key: string]: boolean } | null {
    const confirmPasswordValue = formControl?.value;
    const passwordValue = this.form?.get('password')?.value;

    if (confirmPasswordValue == null)
      return null;

    if (confirmPasswordValue === passwordValue)
      return null;

    return { confirmPasswordDoesNotMatch: true };
  }

}
