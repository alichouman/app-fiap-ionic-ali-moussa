import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonnyRocketsCozinha03Page } from './jonny-rockets-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: JonnyRocketsCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonnyRocketsCozinha03PageRoutingModule {}
