import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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
  
  registryInfos = new Subject<RegistryInformation>();

  constructor() {}
}
