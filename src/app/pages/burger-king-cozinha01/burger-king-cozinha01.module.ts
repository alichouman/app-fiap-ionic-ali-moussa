import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha01PageRoutingModule } from './burger-king-cozinha01-routing.module';

import { BurgerKingCozinha01Page } from './burger-king-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingCozinha01PageRoutingModule
  ],
  declarations: [BurgerKingCozinha01Page]
})
export class BurgerKingCozinha01PageModule {}
