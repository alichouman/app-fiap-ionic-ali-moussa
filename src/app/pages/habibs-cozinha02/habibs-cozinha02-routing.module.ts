import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsCozinha02Page } from './habibs-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsCozinha02PageRoutingModule {}
