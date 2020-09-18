import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingCozinha06Page } from './burger-king-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingCozinha06PageRoutingModule {}
