import { Component } from '@angular/core';

import { packages } from './internet-packs';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrls: ['./internet-plans.component.scss'],
})
export class InternetPlansComponent {
  internetPackages = packages;
  selectedPackageId: number | null = null;

  constructor(private shoppingService: ShoppingService) {}

  selectPackage(packageId: number) {
    this.selectedPackageId = packageId;
  }

  isPackageSelected(packageId: number): boolean {
    return this.selectedPackageId === packageId;
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk
  }
}
