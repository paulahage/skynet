import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingViewComponent } from './shopping-view/shopping-view.component';

const routes: Routes = [
  {path: "", redirectTo: "/internet_packages", pathMatch: "full"},
  { path: 'internet_packages', component: ShoppingViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
