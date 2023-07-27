import { AbstractControl, ValidationErrors } from '@angular/forms';

export function postcodeValidator(
  control: AbstractControl
): ValidationErrors | null {
  const postcodeRegex = /^\d{5}$/;
  const isValid = postcodeRegex.test(control.value);

  if (!isValid) {
    return { invalidPostcode: true };
  }

  const postcodeNumber = Number(control.value);

  if (postcodeNumber < 0 || postcodeNumber > 99999) {
    return { invalidRange: true };
  }

  return null;
}
