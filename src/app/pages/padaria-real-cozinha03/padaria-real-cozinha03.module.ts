import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha03PageRoutingModule } from './padaria-real-cozinha03-routing.module';

import { PadariaRealCozinha03Page } from './padaria-real-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealCozinha03PageRoutingModule
  ],
  declarations: [PadariaRealCozinha03Page]
})
export class PadariaRealCozinha03PageModule {}
