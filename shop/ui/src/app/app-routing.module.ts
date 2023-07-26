import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { ConfirmDataComponent } from './shopping-view/confirm-data/confirm-data.component';
import { PaymentComponent } from './shopping-view/payment/payment.component';
import { PaymentSuccessComponent } from './shopping-view/payment-success/payment-success.component';

const routes: Routes = [
  { path: '', redirectTo: '/internet_packages', pathMatch: 'full' },
  {
    path: 'internet_packages',
    component: ShoppingViewComponent,
    children: [
      { path: 'confirm_personal_data', component: ConfirmDataComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'payment_success', component: PaymentSuccessComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
