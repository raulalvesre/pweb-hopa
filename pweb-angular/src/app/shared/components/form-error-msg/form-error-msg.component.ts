import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../../form-validations';

@Component({
  selector: 'app-form-error-msg',
  templateUrl: './form-error-msg.component.html',
  styleUrls: ['./form-error-msg.component.css']
})
export class FormErrorMsgComponent {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
        }
    }

    return null;
  }

}
