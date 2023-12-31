import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dateValidator } from 'src/app/services/date.validator';

import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentForm!: FormGroup;
  isPaymentFailed: boolean = false;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.maxLength(16),
        Validators.minLength(16),
      ]),
      expirationDate: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        dateValidator
      ]),
      cvvCode: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      cardHolder: new FormControl('', Validators.required),
    });

    this.isPaymentFailed = this.shoppingService.isPaymentFailed;
  }

  onPayment() {
    if (!this.isPaymentFailed) {
      this.shoppingService.isLoading = true;
      setTimeout(() => {
        this.paymentForm.reset();
        this.shoppingService.isLoading = false;
        this.shoppingService.isPaymentSuccess = true;

        this.router.navigate(['../payment_success'], {
          relativeTo: this.route,
        });
      }, 1000);
    } else {
      return;
    }
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber');
  }

  get cvvCode() {
    return this.paymentForm.get('cvvCode');
  }

  get expirationDate() {
    return this.paymentForm.get('expirationDate');
  }

  get cardHolder() {
    return this.paymentForm.get('cardHolder');
  }
}
