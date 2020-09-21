import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaRealCozinha03Page } from './padaria-real-cozinha03.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaRealCozinha03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaRealCozinha03PageRoutingModule {}
