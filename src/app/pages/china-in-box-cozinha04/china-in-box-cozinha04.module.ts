import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha04PageRoutingModule } from './china-in-box-cozinha04-routing.module';

import { ChinaInBoxCozinha04Page } from './china-in-box-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxCozinha04PageRoutingModule
  ],
  declarations: [ChinaInBoxCozinha04Page]
})
export class ChinaInBoxCozinha04PageModule {}
