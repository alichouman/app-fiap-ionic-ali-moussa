import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealCozinha01PageRoutingModule } from './padaria-real-cozinha01-routing.module';

import { PadariaRealCozinha01Page } from './padaria-real-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealCozinha01PageRoutingModule
  ],
  declarations: [PadariaRealCozinha01Page]
})
export class PadariaRealCozinha01PageModule {}
