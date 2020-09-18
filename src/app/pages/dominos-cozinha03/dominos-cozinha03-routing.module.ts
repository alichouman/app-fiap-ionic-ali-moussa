import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominosCozinha03Page } from './dominos-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: DominosCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominosCozinha03PageRoutingModule {}
