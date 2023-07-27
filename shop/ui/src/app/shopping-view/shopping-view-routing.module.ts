import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistryComponent } from './registry/registry.component';
import { ConfirmDataComponent } from './confirm-data/confirm-data.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingViewComponent } from './shopping-view.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingViewComponent,
    children: [
      { path: '', component: RegistryComponent },
      { path: 'confirm_personal_data', component: ConfirmDataComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  {path: 'payment_success', component: PaymentSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingViewRoutingModule {}
