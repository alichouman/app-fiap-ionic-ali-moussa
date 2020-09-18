import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoCozinha03Page } from './griletto-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoCozinha03PageRoutingModule {}
