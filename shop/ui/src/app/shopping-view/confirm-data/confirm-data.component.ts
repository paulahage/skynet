import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistryInformation } from 'src/app/models/user.model';

import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.scss'],
})
export class ConfirmDataComponent {
  personalDataForm!: FormGroup;
  personalAddress: string = 'Zuidplein 444';
  initialUserInfo!: RegistryInformation;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personalDataForm = new FormGroup({
      postCode: new FormControl('test', Validators.required),
      houseNumber: new FormControl(33, Validators.required),
      addition: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('submit the personal information');
    this.shoppingService.isLoading = true;
    setTimeout(() => {
      this.personalDataForm.reset();
      this.shoppingService.isLoading = false;
      this.shoppingService.isRegistryOk = false;
      this.shoppingService.isPaymentView = true;
      this.router.navigate(['payment']);
    }, 1000);
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }
}
