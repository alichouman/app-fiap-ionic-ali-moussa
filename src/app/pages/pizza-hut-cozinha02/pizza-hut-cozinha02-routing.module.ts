import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaHutCozinha02Page } from './pizza-hut-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaHutCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaHutCozinha02PageRoutingModule {}
