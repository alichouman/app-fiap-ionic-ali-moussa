import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha06PageRoutingModule } from './china-in-box-cozinha06-routing.module';

import { ChinaInBoxCozinha06Page } from './china-in-box-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxCozinha06PageRoutingModule
  ],
  declarations: [ChinaInBoxCozinha06Page]
})
export class ChinaInBoxCozinha06PageModule {}
