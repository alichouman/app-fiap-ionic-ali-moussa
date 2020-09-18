import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsCozinha01PageRoutingModule } from './habibs-cozinha01-routing.module';

import { HabibsCozinha01Page } from './habibs-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsCozinha01PageRoutingModule
  ],
  declarations: [HabibsCozinha01Page]
})
export class HabibsCozinha01PageModule {}
