import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaRealCozinha04Page } from './padaria-real-cozinha04.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaRealCozinha04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaRealCozinha04PageRoutingModule {}
