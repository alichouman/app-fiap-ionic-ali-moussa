import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingCozinha03Page } from './burger-king-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingCozinha03PageRoutingModule {}
