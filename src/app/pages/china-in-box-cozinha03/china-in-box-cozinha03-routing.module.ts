import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxCozinha03Page } from './china-in-box-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxCozinha03PageRoutingModule {}
