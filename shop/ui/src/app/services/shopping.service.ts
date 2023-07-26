import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { InternetPackage } from 'src/app/models/internet-packs.model';
import { RegistryInformation } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  isRegistryOk: boolean = false;
  isLoading: boolean = false;
  isConfirmPersonalData: boolean = false;
  isPaymentView: boolean = false;
  isPaymentFailed: boolean = true;

  selectedPackage = new Subject<InternetPackage>();
  registryInfos = new Subject<RegistryInformation>();

  constructor() {}
}
