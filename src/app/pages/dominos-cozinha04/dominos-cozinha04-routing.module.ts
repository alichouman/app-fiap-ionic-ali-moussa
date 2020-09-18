import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominosCozinha04Page } from './dominos-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: DominosCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominosCozinha04PageRoutingModule {}
