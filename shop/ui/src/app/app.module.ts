import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternetPlansComponent } from './shopping-view/internet-plans/internet-plans.component';
import { RegistryComponent } from './shopping-view/registry/registry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { RegistryConfirmComponent } from './shopping-view/registry/registry-confirm/registry-confirm.component';
import { LoadingComponent } from './loading/loading.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConfirmDataComponent } from './shopping-view/confirm-data/confirm-data.component';
import { PaymentComponent } from './shopping-view/payment/payment.component';
import { PaymentErrorComponent } from './shopping-view/payment/payment-error/payment-error.component';
import { PaymentSuccessComponent } from './shopping-view/payment-success/payment-success.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
