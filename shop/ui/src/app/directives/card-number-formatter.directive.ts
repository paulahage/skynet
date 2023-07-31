import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCardNumberFormatter]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardNumberFormatterDirective),
      multi: true,
    },
  ],
})
export class CardNumberFormatterDirective implements ControlValueAccessor {
  constructor(private element: ElementRef<HTMLInputElement>) {}

  private onChange: any = () => {};
  private onTouch: any = () => {};

  writeValue(value: any): void {
    if (value) {
      this.element.nativeElement.value = this.formatCardNumber(value);
    } else {
      this.element.nativeElement.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.element.nativeElement.disabled = isDisabled;
  }

  @HostListener('input', ['$event.target.value']) onInput(value: string): void {
    const cardNumber = value.replace(/\D/g, ''); //Remove non-numeric characters
    this.onChange(cardNumber);
    this.element.nativeElement.value = this.formatCardNumber(cardNumber);
    this.onTouch();
  }

  private formatCardNumber(value: string): string {
    const groups = value.match(/.{1,4}/g); //Split the numeric value into groups of four characters
    return groups ? groups.join(' ') : '';
  }
}
