import { Component } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-registry-confirm',
  templateUrl: './registry-confirm.component.html',
  styleUrls: ['./registry-confirm.component.scss'],
})
export class RegistryConfirmComponent {
  constructor(private shoppingService: ShoppingService) {}

  changeAddress() {
    this.shoppingService.isLoading = true;

    setTimeout(() => {
      this.shoppingService.isRegistryOk = false;
      this.shoppingService.isLoading = false;
    }, 1000);
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }
}
