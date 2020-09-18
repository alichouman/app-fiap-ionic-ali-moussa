import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominosCozinha02PageRoutingModule } from './dominos-cozinha02-routing.module';

import { DominosCozinha02Page } from './dominos-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominosCozinha02PageRoutingModule
  ],
  declarations: [DominosCozinha02Page]
})
export class DominosCozinha02PageModule {}
