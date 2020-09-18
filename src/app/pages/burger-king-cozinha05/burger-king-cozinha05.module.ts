import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha05PageRoutingModule } from './burger-king-cozinha05-routing.module';

import { BurgerKingCozinha05Page } from './burger-king-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingCozinha05PageRoutingModule
  ],
  declarations: [BurgerKingCozinha05Page]
})
export class BurgerKingCozinha05PageModule {}
