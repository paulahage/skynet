import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InternetPackage } from 'src/app/models/internet-packs.model';
import { AddressInformation, RegistryInformation } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  isRegistryOk: boolean = false;
  isLoading: boolean = false;
  isConfirmPersonalData: boolean = false;
  isPaymentView: boolean = false;
  isPaymentFailed: boolean = false;
  isPaymentSuccess: boolean = false;
  isPersonalAddress: boolean = false;

  registryInfos = new BehaviorSubject<RegistryInformation | null>(null);
  addressInfos = new BehaviorSubject<AddressInformation | null>(null);

  selectedPackage = new BehaviorSubject<InternetPackage | null>({
    id: 3,
    title: 'Complete',
    progress: 'width: 43%',
    details: [
      '400 Mbit/s download',
      '40 Mbit/s upload',
      'Internet security',
      'Installation help',
    ],
    label: true,
    price: '60,90',
  });

  constructor() {}
}
