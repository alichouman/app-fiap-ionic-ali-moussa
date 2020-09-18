import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxCozinha05Page } from './china-in-box-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxCozinha05PageRoutingModule {}
