import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaRealCozinha01Page } from './padaria-real-cozinha01.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaRealCozinha01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaRealCozinha01PageRoutingModule {}
