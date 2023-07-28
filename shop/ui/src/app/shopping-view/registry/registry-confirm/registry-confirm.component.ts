import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddressInformation,
  RegistryInformation,
} from 'src/app/models/user.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-registry-confirm',
  templateUrl: './registry-confirm.component.html',
  styleUrls: ['./registry-confirm.component.scss'],
})
export class RegistryConfirmComponent {
  addressInfo$!: Observable<AddressInformation | null>;
  registryInfo$!: Observable<RegistryInformation | null>;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.registryInfo$ = this.shoppingService.registryInfos;
    this.addressInfo$ = this.shoppingService.addressInfos;
  }

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
