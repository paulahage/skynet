import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AddressInformation } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { postcodeValidator } from 'src/app/services/postcode.validator';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {
  registryForm!: FormGroup;
  addressInfo$!: Observable<AddressInformation | null>;

  constructor(
    private shoppingService: ShoppingService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.registryForm = new FormGroup({
      postCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        postcodeValidator,
      ]),
      houseNumber: new FormControl('', Validators.required),
      addition: new FormControl(''),
    });

    this.registryForm.get('postCode')?.valueChanges.subscribe((postcode) => {
      if (this.registryForm.get('postCode')?.valid) {
        this.apiService.getAddress(postcode);
        this.shoppingService.isPersonalAddress = true;
        this.addressInfo$ = this.shoppingService.addressInfos;
      } else {
        this.shoppingService.isPersonalAddress = false;
      }
    });
  }

  onSubmit() {
    this.shoppingService.registryInfos.next(this.registryForm.value);
    this.shoppingService.isLoading = true;

    const postcode = this.registryForm.get('postCode')?.value;

    setTimeout(() => {
      this.apiService.getPlans(postcode);
      this.shoppingService.isRegistryOk = true;
      this.shoppingService.isLoading = false;
      this.shoppingService.isPersonalAddress = false;

      this.registryForm.reset();
    }, 2000);
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }

  get isPersonalAddress() {
    return this.shoppingService.isPersonalAddress;
  }
}
