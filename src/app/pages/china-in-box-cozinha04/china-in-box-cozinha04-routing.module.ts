import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxCozinha04Page } from './china-in-box-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxCozinha04PageRoutingModule {}
