import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shoppingService: ShoppingService
  ) {}

  redirectHomePage() {
    this.shoppingService.isLoading = true;
    setTimeout(() => {
      this.shoppingService.isLoading = false;
      this.shoppingService.isPaymentSuccess = false;
      this.shoppingService.isRegistryOk = false;
      this.shoppingService.isPaymentView = false;
      this.shoppingService.isConfirmPersonalData = false;

      this.router.navigate([''], { relativeTo: this.route });
    }, 1000);
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }
}
