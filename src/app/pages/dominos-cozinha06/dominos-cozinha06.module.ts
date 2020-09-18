import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominosCozinha06PageRoutingModule } from './dominos-cozinha06-routing.module';

import { DominosCozinha06Page } from './dominos-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominosCozinha06PageRoutingModule
  ],
  declarations: [DominosCozinha06Page]
})
export class DominosCozinha06PageModule {}
