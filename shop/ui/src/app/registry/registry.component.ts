import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {
  registryForm!: FormGroup;
  isRegistryOk: boolean = false;

  ngOnInit() {
    this.registryForm = new FormGroup({
      postCode: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      addition: new FormControl(''),
    });

    this.registryForm.get('postCode')?.valueChanges.subscribe((value) => {
      console.log('postCode:', value);
    });
  }

  onSubmit() {
    console.log('ok');
    this.isRegistryOk = true;
  }
}
