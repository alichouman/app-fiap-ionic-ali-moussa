import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoCozinha06Page } from './griletto-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoCozinha06PageRoutingModule {}
