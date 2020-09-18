import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha06PageRoutingModule } from './burger-king-cozinha06-routing.module';

import { BurgerKingCozinha06Page } from './burger-king-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingCozinha06PageRoutingModule
  ],
  declarations: [BurgerKingCozinha06Page]
})
export class BurgerKingCozinha06PageModule {}
