import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateValidator(control: AbstractControl): ValidationErrors | null {

  if (control.value) {
    const month = +control?.value.slice(0, 2);
    const year = +control?.value.slice(2, 4);
    let currentYear = +new Date().getFullYear().toString().slice(2, 4);

    if (month > 12 || month === 0) {
      return { invalidMonth: true };
    }

    if (year < currentYear) {
      return { invalidYear: true };
    }
  }

  return null;
}
