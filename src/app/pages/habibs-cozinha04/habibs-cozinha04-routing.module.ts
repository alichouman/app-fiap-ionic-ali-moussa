import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsCozinha04Page } from './habibs-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsCozinha04PageRoutingModule {}
