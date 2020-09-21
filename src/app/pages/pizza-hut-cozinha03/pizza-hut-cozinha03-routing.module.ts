import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaHutCozinha03Page } from './pizza-hut-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaHutCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaHutCozinha03PageRoutingModule {}
