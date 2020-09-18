import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonnyRocketsCozinha05Page } from './jonny-rockets-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: JonnyRocketsCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonnyRocketsCozinha05PageRoutingModule {}
