import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha03PageRoutingModule } from './griletto-cozinha03-routing.module';

import { GrilettoCozinha03Page } from './griletto-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoCozinha03PageRoutingModule
  ],
  declarations: [GrilettoCozinha03Page]
})
export class GrilettoCozinha03PageModule {}
