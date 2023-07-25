import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { InternetPackage } from 'src/app/models/internet-packs.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  isRegistryOk: boolean = false;
  isLoading: boolean = false;
  selectedPackage = new Subject<InternetPackage>();

  constructor() {}
}
