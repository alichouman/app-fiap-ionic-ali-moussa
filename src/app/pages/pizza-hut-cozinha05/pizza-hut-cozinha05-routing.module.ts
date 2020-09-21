import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaHutCozinha05Page } from './pizza-hut-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaHutCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaHutCozinha05PageRoutingModule {}
