import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrilettoPage } from './griletto.page';

const routes: Routes = [
  {
    path: '',
    component: GrilettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrilettoPageRoutingModule {}
