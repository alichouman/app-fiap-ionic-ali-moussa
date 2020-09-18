import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsCozinha06PageRoutingModule } from './habibs-cozinha06-routing.module';

import { HabibsCozinha06Page } from './habibs-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsCozinha06PageRoutingModule
  ],
  declarations: [HabibsCozinha06Page]
})
export class HabibsCozinha06PageModule {}
