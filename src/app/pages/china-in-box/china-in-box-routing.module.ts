import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinaInBoxPage } from './china-in-box.page';

const routes: Routes = [
  {
    path: '',
    component: ChinaInBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinaInBoxPageRoutingModule {}
