import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingCozinha05Page } from './burger-king-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingCozinha05PageRoutingModule {}
