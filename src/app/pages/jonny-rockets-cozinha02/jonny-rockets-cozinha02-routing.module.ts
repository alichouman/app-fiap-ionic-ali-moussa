import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonnyRocketsCozinha02Page } from './jonny-rockets-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: JonnyRocketsCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonnyRocketsCozinha02PageRoutingModule {}
