import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
      cardNumber: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      cvCode: new FormControl(null, Validators.required),
      cardHolder: new FormControl('', Validators.required),
    });

    this.isPaymentFailed = this.shoppingService.isPaymentFailed;
  }

  onPayment() {
    console.log('payment ok');

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
}
