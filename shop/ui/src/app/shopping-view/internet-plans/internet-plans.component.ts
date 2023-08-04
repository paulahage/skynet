import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ShoppingService } from 'src/app/services/shopping.service';
import { InternetPlan } from 'src/app/models/internet-packs.model';
@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrls: ['./internet-plans.component.scss'],
})
export class InternetPlansComponent {
  selectedPackageId: string | null = null;
  internetPlans$!: Observable<InternetPlan[]>;
  subscription!: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.internetPlans$ = this.shoppingService.internetPlanInfos;

    this.subscription = this.internetPlans$.subscribe((plans) => {
      this.selectedPackageId =
        plans.length > 0 ? plans[plans.length - 1].id : null;
      this.shoppingService.selectedPackage.next(plans[plans.length - 1]);
    });
  }

  selectPackage(internetPlan: InternetPlan) {
    this.selectedPackageId = internetPlan.id;
    this.shoppingService.selectedPackage.next(internetPlan);
  }

  isPackageSelected(packageId: string): boolean {
    return this.selectedPackageId === packageId;
  }

  getProgressBar(plan: InternetPlan) {
    const downloadValue = +plan.download;

    let width;

    switch (true) {
      case downloadValue < 50:
        width = 'width: 30%';
        break;
      case downloadValue >= 50 && downloadValue < 100:
        width = 'width: 40%';
        break;
      case downloadValue >= 100 && downloadValue < 300:
        width = 'width: 50%';
        break;
      case downloadValue <= 300:
        width = 'width: 70%';
        break;
      default:
        width = 'width: 0%';
        break;
    }
    return width;
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
