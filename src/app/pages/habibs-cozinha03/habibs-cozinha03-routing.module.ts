import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsCozinha03Page } from './habibs-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsCozinha03PageRoutingModule {}
