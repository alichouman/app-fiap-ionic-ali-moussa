import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha06PageRoutingModule } from './griletto-cozinha06-routing.module';

import { GrilettoCozinha06Page } from './griletto-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoCozinha06PageRoutingModule
  ],
  declarations: [GrilettoCozinha06Page]
})
export class GrilettoCozinha06PageModule {}
