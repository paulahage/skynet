import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import {
  AddressInformation,
  RegistryInformation,
} from 'src/app/models/user.model';
import { postcodeValidator } from 'src/app/services/postcode.validator';
import { ShoppingService } from 'src/app/services/shopping.service';
@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.scss'],
})
export class ConfirmDataComponent {
  personalDataForm!: FormGroup;
  registryInfo!: RegistryInformation | null;
  addressInfo$!: Observable<AddressInformation | null>;
  subscription!: Subscription;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.shoppingService.isPersonalAddress = true;
    this.addressInfo$ = this.shoppingService.addressInfos;
    this.subscription = this.shoppingService.registryInfos.subscribe(
      (infos) => (this.registryInfo = infos)
    );

    this.personalDataForm = new FormGroup({
      postCode: new FormControl(this.registryInfo?.postCode, [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        postcodeValidator,
      ]),
      houseNumber: new FormControl(
        this.registryInfo?.houseNumber,
        Validators.required
      ),
      addition: new FormControl(this.registryInfo?.addition),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });

    this.personalDataForm
      .get('postCode')
      ?.valueChanges.subscribe((postcode) => {
        if (this.personalDataForm.get('postCode')?.valid) {
          this.shoppingService.isPersonalAddress = true;
        } else {
          this.shoppingService.isPersonalAddress = false;
        }
      });
  }

  onSubmit() {
    this.shoppingService.isLoading = true;
    setTimeout(() => {
      this.personalDataForm.reset();
      this.shoppingService.isLoading = false;
      this.router.navigate(['../payment'], { relativeTo: this.route });
    }, 1000);
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }

  get isPersonalAddress() {
    return this.shoppingService.isPersonalAddress;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
