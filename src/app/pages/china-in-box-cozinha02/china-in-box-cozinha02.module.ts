import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxCozinha02PageRoutingModule } from './china-in-box-cozinha02-routing.module';

import { ChinaInBoxCozinha02Page } from './china-in-box-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxCozinha02PageRoutingModule
  ],
  declarations: [ChinaInBoxCozinha02Page]
})
export class ChinaInBoxCozinha02PageModule {}
