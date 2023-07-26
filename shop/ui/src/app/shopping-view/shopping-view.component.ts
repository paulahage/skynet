import { Component } from '@angular/core';

import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.scss'],
})
export class ShoppingViewComponent {
  constructor(private shoppingService: ShoppingService) {}

  get isPaymentSuccess() {
    return this.shoppingService.isPaymentSuccess;
  }
}
