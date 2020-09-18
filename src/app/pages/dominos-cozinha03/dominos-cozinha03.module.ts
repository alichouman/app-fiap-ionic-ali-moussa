import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominosCozinha03PageRoutingModule } from './dominos-cozinha03-routing.module';

import { DominosCozinha03Page } from './dominos-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominosCozinha03PageRoutingModule
  ],
  declarations: [DominosCozinha03Page]
})
export class DominosCozinha03PageModule {}
