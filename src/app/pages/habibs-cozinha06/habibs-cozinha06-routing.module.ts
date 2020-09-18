import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsCozinha06Page } from './habibs-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsCozinha06PageRoutingModule {}
