import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShoppingService } from './shopping.service';

import { AddressInformation } from '../models/user.model';
import { InternetPlan } from '../models/internet-packs.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiAddressUrl = environment.apiAddressUrl;
  private apiPlansUrl = environment.apiPlansUrl;
  private addressEndpoint: string = 'getAddress';
  private internetPlansEndpoint: string = 'getPlans';

  constructor(
    private http: HttpClient,
    private shoppingService: ShoppingService
  ) {}

  getAddress(postcode: string): void {
    const params = new HttpParams().set('postcode', postcode);
    this.http
      .get<AddressInformation>(`${this.apiAddressUrl}${this.addressEndpoint}`, { params })
      .subscribe((ad: AddressInformation) =>
        this.shoppingService.addressInfos.next(ad)
      ),
      (error: any) => this.shoppingService.addressInfos.next(null);
  }

  getPlans(postcode: string): void {
    const params = new HttpParams().set('postcode', postcode);
    this.http
      .get<InternetPlan[]>(`${this.apiPlansUrl}${this.internetPlansEndpoint}`, { params })
      .subscribe((plans: InternetPlan[]) => {
        this.shoppingService.internetPlanInfos.next(plans);
      }),
      (error: any) => this.shoppingService.internetPlanInfos.next([]);
  }
}
