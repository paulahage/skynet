import { AbstractControl, ValidationErrors } from '@angular/forms';

export function postcodeValidator(control: AbstractControl): ValidationErrors | null {
  const postcodeNumber = Number(control.value);

  if (postcodeNumber < 0 || postcodeNumber > 99999) {
    return { invalidRange: true };
  }

  return null;
}
