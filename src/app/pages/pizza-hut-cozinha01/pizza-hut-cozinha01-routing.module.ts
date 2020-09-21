import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaHutCozinha01Page } from './pizza-hut-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaHutCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaHutCozinha01PageRoutingModule {}
