import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominosCozinha01PageRoutingModule } from './dominos-cozinha01-routing.module';

import { DominosCozinha01Page } from './dominos-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominosCozinha01PageRoutingModule
  ],
  declarations: [DominosCozinha01Page]
})
export class DominosCozinha01PageModule {}
