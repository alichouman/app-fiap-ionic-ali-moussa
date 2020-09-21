import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaRealCozinha02Page } from './padaria-real-cozinha02.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaRealCozinha02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaRealCozinha02PageRoutingModule {}
