import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaRealCozinha06Page } from './padaria-real-cozinha06.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaRealCozinha06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaRealCozinha06PageRoutingModule {}
