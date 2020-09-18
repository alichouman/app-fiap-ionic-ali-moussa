import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsCozinha02PageRoutingModule } from './habibs-cozinha02-routing.module';

import { HabibsCozinha02Page } from './habibs-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsCozinha02PageRoutingModule
  ],
  declarations: [HabibsCozinha02Page]
})
export class HabibsCozinha02PageModule {}
