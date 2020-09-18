import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominosCozinha05Page } from './dominos-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: DominosCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominosCozinha05PageRoutingModule {}
