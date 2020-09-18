import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoCozinha04Page } from './griletto-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoCozinha04PageRoutingModule {}
