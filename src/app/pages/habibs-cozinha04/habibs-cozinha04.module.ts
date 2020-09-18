import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsCozinha04PageRoutingModule } from './habibs-cozinha04-routing.module';

import { HabibsCozinha04Page } from './habibs-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsCozinha04PageRoutingModule
  ],
  declarations: [HabibsCozinha04Page]
})
export class HabibsCozinha04PageModule {}
