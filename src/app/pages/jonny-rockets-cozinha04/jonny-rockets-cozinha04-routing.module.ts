import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonnyRocketsCozinha04Page } from './jonny-rockets-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: JonnyRocketsCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonnyRocketsCozinha04PageRoutingModule {}
