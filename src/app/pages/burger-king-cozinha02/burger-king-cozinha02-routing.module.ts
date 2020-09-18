import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingCozinha02Page } from './burger-king-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingCozinha02PageRoutingModule {}
