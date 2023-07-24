import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {
  registryForm!: FormGroup;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.registryForm = new FormGroup({
      postCode: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      addition: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('ok');
    this.shoppingService.isLoading = true;
    setTimeout(() => {
      this.shoppingService.isRegistryOk = true;
      this.registryForm.reset();
      this.shoppingService.isLoading = false;
    }, 2000);
  }

  get isRegistryOk() {
    return this.shoppingService.isRegistryOk;
  }

  get isLoading() {
    return this.shoppingService.isLoading;
  }
}
