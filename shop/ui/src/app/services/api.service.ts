import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShoppingService } from './shopping.service';
import { AddressInformation } from '../models/user.model';
import { InternetPlan } from '../models/internet-packs.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiAddressUrl = 'http://localhost:8080/getAddress';
  private apiPlansUrl = 'http://localhost:8080/getPlans';

  constructor(
    private http: HttpClient,
    private shoppingService: ShoppingService
  ) {}

  getAddress(postcode: string): void {
    const params = new HttpParams().set('postcode', postcode);
    this.http
      .get<AddressInformation>(this.apiAddressUrl, { params })
      .subscribe((ad: AddressInformation) =>
        this.shoppingService.addressInfos.next(ad)
      ),
      (error: any) => this.shoppingService.addressInfos.next(null);
  }

  getPlans(postcode: string): void {
    const params = new HttpParams().set('postcode', postcode);
    this.http
      .get<InternetPlan[]>(this.apiPlansUrl, { params })
      .subscribe((plans: InternetPlan[]) => {
        this.shoppingService.internetPlanInfos.next(plans);
        console.log('internet plans', plans);
      }),
      (error: any) => this.shoppingService.internetPlanInfos.next([]);
  }
}
