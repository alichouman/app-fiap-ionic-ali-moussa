import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaHutPage } from './pizza-hut.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaHutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaHutPageRoutingModule {}
