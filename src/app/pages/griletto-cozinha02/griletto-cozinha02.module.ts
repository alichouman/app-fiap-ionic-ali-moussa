import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha02PageRoutingModule } from './griletto-cozinha02-routing.module';

import { GrilettoCozinha02Page } from './griletto-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoCozinha02PageRoutingModule
  ],
  declarations: [GrilettoCozinha02Page]
})
export class GrilettoCozinha02PageModule {}
