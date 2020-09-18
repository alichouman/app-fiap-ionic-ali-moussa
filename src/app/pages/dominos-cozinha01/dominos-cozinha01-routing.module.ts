import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominosCozinha01Page } from './dominos-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: DominosCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominosCozinha01PageRoutingModule {}
