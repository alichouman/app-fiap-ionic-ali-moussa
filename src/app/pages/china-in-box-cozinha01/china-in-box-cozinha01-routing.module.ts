import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxCozinha01Page } from './china-in-box-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxCozinha01PageRoutingModule {}
