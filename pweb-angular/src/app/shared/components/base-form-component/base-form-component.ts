
import { Directive } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Directive()
export abstract class BaseFormComponent {
  form: FormGroup;

  constructor() { }

  abstract submit(): any;

  onSubmit() {
    if (this.form.valid) {
      this.submit();
    } else {
      this.checkFormValidations(this.form);
    }
  }

  checkFormValidations(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.checkFormValidations(controle);
      }
    });
  }

  getFormControl(formControlName: string): FormControl {
    return this.form?.get(formControlName) as FormControl;
  }

}
