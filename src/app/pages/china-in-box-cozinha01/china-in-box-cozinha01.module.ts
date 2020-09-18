import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha01PageRoutingModule } from './china-in-box-cozinha01-routing.module';

import { ChinaInBoxCozinha01Page } from './china-in-box-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxCozinha01PageRoutingModule
  ],
  declarations: [ChinaInBoxCozinha01Page]
})
export class ChinaInBoxCozinha01PageModule {}
