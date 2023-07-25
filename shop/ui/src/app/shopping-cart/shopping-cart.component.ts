import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingService } from '../services/shopping.service';
import { InternetPackage } from '../models/internet-packs.model';
import { internetInstallationHelp } from '../data/internet-packs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  internetPackage!: InternetPackage;
  subscription!: Subscription;
  internetInstallation = internetInstallationHelp;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.subscription = this.shoppingService.selectedPackage.subscribe(
      (itPackage) => (this.internetPackage = itPackage)
    );
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }
}
