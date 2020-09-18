import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonnyRocketsCozinha06Page } from './jonny-rockets-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: JonnyRocketsCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonnyRocketsCozinha06PageRoutingModule {}
