import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha03PageRoutingModule } from './china-in-box-cozinha03-routing.module';

import { ChinaInBoxCozinha03Page } from './china-in-box-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxCozinha03PageRoutingModule
  ],
  declarations: [ChinaInBoxCozinha03Page]
})
export class ChinaInBoxCozinha03PageModule {}
