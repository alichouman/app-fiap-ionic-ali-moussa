import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaRealCozinha05Page } from './padaria-real-cozinha05.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaRealCozinha05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaRealCozinha05PageRoutingModule {}
