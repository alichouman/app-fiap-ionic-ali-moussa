import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominosCozinha02Page } from './dominos-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: DominosCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominosCozinha02PageRoutingModule {}
