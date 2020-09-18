import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha04PageRoutingModule } from './griletto-cozinha04-routing.module';

import { GrilettoCozinha04Page } from './griletto-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoCozinha04PageRoutingModule
  ],
  declarations: [GrilettoCozinha04Page]
})
export class GrilettoCozinha04PageModule {}
