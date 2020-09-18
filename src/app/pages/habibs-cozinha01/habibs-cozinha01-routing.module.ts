import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsCozinha01Page } from './habibs-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsCozinha01PageRoutingModule {}
