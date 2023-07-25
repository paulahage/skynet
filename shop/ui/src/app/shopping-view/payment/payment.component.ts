import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentForm!: FormGroup;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      cvCode: new FormControl(null, Validators.required),
      cardHolder: new FormControl('', Validators.required),
    });
  }

  onPayment() {
    console.log('payment ok');
    this.shoppingService.isLoading = true;
    setTimeout(() => {
      this.paymentForm.reset();
      this.shoppingService.isLoading = false;
      this.router.navigate(['']);
    }, 1000);
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }
}
