import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsCozinha05PageRoutingModule } from './habibs-cozinha05-routing.module';

import { HabibsCozinha05Page } from './habibs-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsCozinha05PageRoutingModule
  ],
  declarations: [HabibsCozinha05Page]
})
export class HabibsCozinha05PageModule {}
