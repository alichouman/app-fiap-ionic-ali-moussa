import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha06PageRoutingModule } from './padaria-real-cozinha06-routing.module';

import { PadariaRealCozinha06Page } from './padaria-real-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealCozinha06PageRoutingModule
  ],
  declarations: [PadariaRealCozinha06Page]
})
export class PadariaRealCozinha06PageModule {}
