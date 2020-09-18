import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoCozinha05Page } from './griletto-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoCozinha05PageRoutingModule {}
