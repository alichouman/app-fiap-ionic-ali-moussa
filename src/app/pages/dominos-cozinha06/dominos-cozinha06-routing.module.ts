import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominosCozinha06Page } from './dominos-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: DominosCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominosCozinha06PageRoutingModule {}
