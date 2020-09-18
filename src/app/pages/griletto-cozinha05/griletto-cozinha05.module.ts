import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha05PageRoutingModule } from './griletto-cozinha05-routing.module';

import { GrilettoCozinha05Page } from './griletto-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoCozinha05PageRoutingModule
  ],
  declarations: [GrilettoCozinha05Page]
})
export class GrilettoCozinha05PageModule {}
