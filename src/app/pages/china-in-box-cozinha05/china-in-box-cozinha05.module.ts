import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha05PageRoutingModule } from './china-in-box-cozinha05-routing.module';

import { ChinaInBoxCozinha05Page } from './china-in-box-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxCozinha05PageRoutingModule
  ],
  declarations: [ChinaInBoxCozinha05Page]
})
export class ChinaInBoxCozinha05PageModule {}
