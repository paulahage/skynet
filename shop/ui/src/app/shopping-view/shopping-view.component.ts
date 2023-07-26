import { Component } from '@angular/core';

import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.scss'],
})
export class ShoppingViewComponent {
  constructor(private shoppingService: ShoppingService) {}

  get isConfirmPersonalData() {
    return this.shoppingService.isConfirmPersonalData;
  }

  get isPaymentView() {
    return this.shoppingService.isPaymentView;
  }
}