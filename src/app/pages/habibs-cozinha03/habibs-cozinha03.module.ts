import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsCozinha03PageRoutingModule } from './habibs-cozinha03-routing.module';

import { HabibsCozinha03Page } from './habibs-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsCozinha03PageRoutingModule
  ],
  declarations: [HabibsCozinha03Page]
})
export class HabibsCozinha03PageModule {}
