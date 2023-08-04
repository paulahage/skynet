import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ShoppingService } from '../services/shopping.service';
import { InternetPlan } from '../models/internet-packs.model';
import { internetBenefits } from '../ui-data/internet-benefits';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  internetPlan!: InternetPlan | null;
  subscription!: Subscription;
  internetBenefits = internetBenefits;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.shoppingService.selectedPackage.subscribe(
      (itPackage) => (this.internetPlan = itPackage)
    );
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }

  get isConfirmPersonalData() {
    return this.shoppingService.isConfirmPersonalData;
  }

  get isPaymentView() {
    return this.shoppingService.isPaymentView;
  }

  continueShopping() {
    this.shoppingService.isLoading = true;

    setTimeout(() => {
      this.shoppingService.isLoading = false;
      this.shoppingService.isConfirmPersonalData = true;

      this.router.navigate(['confirm_personal_data'], {
        relativeTo: this.route,
      });
    }, 1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
