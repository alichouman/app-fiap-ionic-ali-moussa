import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonnyRocketsCozinha01Page } from './jonny-rockets-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: JonnyRocketsCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonnyRocketsCozinha01PageRoutingModule {}
