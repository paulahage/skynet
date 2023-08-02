import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Directive({
  selector: '[appExpirationDateFormatter]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExpirationDateFormatterDirective),
      multi: true,
    },
  ],
})
export class ExpirationDateFormatterDirective implements ControlValueAccessor{

  private onChange: any = () => { }
  private onTouch: any = () => { }

  writeValue(value: any): void {
    if (value) {
      this.element.nativeElement.value = this.formatExpirationDate(value);
    } else {
      this.element.nativeElement.value = ''
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

  constructor(private element: ElementRef<HTMLInputElement>) { }

  @HostListener('input', ['$event.target.value']) onInput(value: string): void {
    const expirationDate = value.replace(/\D/g, '').slice(0,4); //Remove non-numeric characters
    this.onChange(expirationDate);
    this.element.nativeElement.value = this.formatExpirationDate(expirationDate);
    this.onTouch();
  }

  @HostListener('blur', ['$event.target.value']) onBlur(value: string): void {
    if (!value) {
      this.element.nativeElement.value = '';
      this.onChange(null);
      this.onTouch();
    }
  }

  private formatExpirationDate(value: string): string{
    const date = value.slice()
    const month = value.substring(0, 2);
    const year = value.substring(2, 4);
    return `${month}/${year}`
  }
}
