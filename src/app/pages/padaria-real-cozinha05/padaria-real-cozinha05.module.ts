import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha05PageRoutingModule } from './padaria-real-cozinha05-routing.module';

import { PadariaRealCozinha05Page } from './padaria-real-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealCozinha05PageRoutingModule
  ],
  declarations: [PadariaRealCozinha05Page]
})
export class PadariaRealCozinha05PageModule {}
