import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingCozinha04Page } from './burger-king-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingCozinha04PageRoutingModule {}
