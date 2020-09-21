import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha02PageRoutingModule } from './padaria-real-cozinha02-routing.module';

import { PadariaRealCozinha02Page } from './padaria-real-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealCozinha02PageRoutingModule
  ],
  declarations: [PadariaRealCozinha02Page]
})
export class PadariaRealCozinha02PageModule {}
