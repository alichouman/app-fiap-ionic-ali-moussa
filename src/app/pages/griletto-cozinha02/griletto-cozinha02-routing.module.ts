import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoCozinha02Page } from './griletto-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoCozinha02PageRoutingModule {}
