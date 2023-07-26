import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/internet_packages', pathMatch: 'full' },
  {
    path: 'internet_packages',
    loadChildren: () =>
      import('./shopping-view/shopping-view.module').then(
        (m) => m.ShoppingViewModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
