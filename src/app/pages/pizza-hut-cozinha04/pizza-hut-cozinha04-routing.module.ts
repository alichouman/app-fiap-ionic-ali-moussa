import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaHutCozinha04Page } from './pizza-hut-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaHutCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaHutCozinha04PageRoutingModule {}
