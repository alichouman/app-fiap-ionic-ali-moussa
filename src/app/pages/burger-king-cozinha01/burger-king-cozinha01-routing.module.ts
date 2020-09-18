import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerKingCozinha01Page } from './burger-king-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerKingCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerKingCozinha01PageRoutingModule {}
