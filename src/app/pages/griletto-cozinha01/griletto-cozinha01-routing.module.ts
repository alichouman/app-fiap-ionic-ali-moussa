import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoCozinha01Page } from './griletto-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoCozinha01PageRoutingModule {}
