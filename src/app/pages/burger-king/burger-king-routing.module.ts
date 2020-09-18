import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingPage } from './burger-king.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingPageRoutingModule {}
