import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';
import { ConfirmDataComponent } from './shopping-view/confirm-data/confirm-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/internet_packages', pathMatch: 'full' },
  { path: 'internet_packages', component: ShoppingViewComponent },
  { path: 'confirm_personal_data', component: ConfirmDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
