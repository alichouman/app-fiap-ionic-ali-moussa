import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha04PageRoutingModule } from './padaria-real-cozinha04-routing.module';

import { PadariaRealCozinha04Page } from './padaria-real-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealCozinha04PageRoutingModule
  ],
  declarations: [PadariaRealCozinha04Page]
})
export class PadariaRealCozinha04PageModule {}
