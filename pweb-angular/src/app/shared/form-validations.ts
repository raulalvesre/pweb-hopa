export class FormValidations {

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
      const config: any = {
          'required': `${fieldName} é obrigatório`,
          'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres`,
          'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres`,
          'alreadyRegistered': `${fieldName} já cadastrado`,
          'duplicate': `${fieldName} duplicado`,
          'invalid': `${fieldName} inválido`,
          'email': 'Email inválido',
          'passwordWithAtLeastOneNumber': 'A senha precisa ter pelo menos um número',
          'pattern': `${fieldName} inválido`,
      };

      return config[validatorName];
  }

}
