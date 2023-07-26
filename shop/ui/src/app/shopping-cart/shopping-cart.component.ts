import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingService } from '../services/shopping.service';
import { InternetPackage } from '../models/internet-packs.model';
import { internetInstallationHelp } from '../data/internet-packs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  internetPackage!: InternetPackage;
  subscription!: Subscription;
  internetInstallation = internetInstallationHelp;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.shoppingService.selectedPackage.subscribe(
      (itPackage) => (this.internetPackage = itPackage!)
    );
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }

  get isConfirmPersonalData() {
    return this.shoppingService.isConfirmPersonalData;
  }

  continueShopping() {
    this.router.navigate(['confirm_personal_data']);
    this.shoppingService.isConfirmPersonalData = true;
  }
}