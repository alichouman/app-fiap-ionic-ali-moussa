import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxCozinha06Page } from './china-in-box-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxCozinha06PageRoutingModule {}
