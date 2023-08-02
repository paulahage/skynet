import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from '../loading/loading.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ConfirmDataComponent } from './confirm-data/confirm-data.component';
import { InternetPlansComponent } from './internet-plans/internet-plans.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentErrorComponent } from './payment/payment-error/payment-error.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistryConfirmComponent } from './registry/registry-confirm/registry-confirm.component';
import { RegistryComponent } from './registry/registry.component';
import { ShoppingViewComponent } from './shopping-view.component';
import { ShoppingViewRoutingModule } from './shopping-view-routing.module';
import { CardNumberFormatterDirective } from '../directives/card-number-formatter.directive';
import { ExpirationDateFormatterDirective } from '../directives/expiration-date-formatter.directive';

@NgModule({
  declarations: [
    InternetPlansComponent,
    RegistryComponent,
    ShoppingViewComponent,
    RegistryConfirmComponent,
    LoadingComponent,
    ShoppingCartComponent,
    ConfirmDataComponent,
    PaymentComponent,
    PaymentErrorComponent,
    PaymentSuccessComponent,
    CardNumberFormatterDirective,
    ExpirationDateFormatterDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ShoppingViewRoutingModule,
  ],
})
export class ShoppingViewModule {}
