import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominosCozinha05PageRoutingModule } from './dominos-cozinha05-routing.module';

import { DominosCozinha05Page } from './dominos-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominosCozinha05PageRoutingModule
  ],
  declarations: [DominosCozinha05Page]
})
export class DominosCozinha05PageModule {}
