import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsCozinha05Page } from './habibs-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsCozinha05PageRoutingModule {}
