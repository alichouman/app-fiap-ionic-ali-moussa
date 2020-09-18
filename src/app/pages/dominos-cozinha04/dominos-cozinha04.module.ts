import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominosCozinha04PageRoutingModule } from './dominos-cozinha04-routing.module';

import { DominosCozinha04Page } from './dominos-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominosCozinha04PageRoutingModule
  ],
  declarations: [DominosCozinha04Page]
})
export class DominosCozinha04PageModule {}
