import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InternetPlan } from 'src/app/models/internet-packs.model';
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
  selectedPackage = new BehaviorSubject<InternetPlan | null>(null);
  internetPlanInfos = new BehaviorSubject<InternetPlan[] | []>([]);

  constructor() {}
}
