import { Component } from '@angular/core';

import { packages } from '../../data/internet-packs';
import { ShoppingService } from 'src/app/services/shopping.service';
import { InternetPackage } from 'src/app/models/internet-packs.model';

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrls: ['./internet-plans.component.scss'],
})
export class InternetPlansComponent {
  internetPackages = packages;
  selectedPackageId: number | null = null;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.selectedPackageId = this.internetPackages.length > 0 ? this.internetPackages[2].id : null;
    this.shoppingService.selectedPackage.next(this.internetPackages[2]);
  }

  selectPackage(internetPackage: InternetPackage) {
    this.selectedPackageId = internetPackage.id;
    this.shoppingService.selectedPackage.next(internetPackage);
  }

  isPackageSelected(packageId: number): boolean {
    return this.selectedPackageId === packageId;
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }
}
