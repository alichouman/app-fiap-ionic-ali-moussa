import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabibsPage } from './habibs.page';

const routes: Routes = [
  {
    path: '',
    component: HabibsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabibsPageRoutingModule {}
