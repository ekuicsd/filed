import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {

  static contactNumberValidation(control: AbstractControl): ValidationErrors {
    // const reg = /^[0-9-,()]{10,13}$/;
    // const reg=/^\d{10,13}$/;
    const tenDigitRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    if (!control.value) {
      return null;
    }
    const isValid = control.value &&
      (tenDigitRegex.test(control.value.toString()));
    const message = {
      contactNumberValidation: {
        message: 'This field only accepts 10 digits numbers.'
      }
    };
    return isValid ? null : message;
  }

}