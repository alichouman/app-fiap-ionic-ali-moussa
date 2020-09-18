import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxCozinha02Page } from './china-in-box-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxCozinha02PageRoutingModule {}
