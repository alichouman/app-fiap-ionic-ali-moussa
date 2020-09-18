import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha04PageRoutingModule } from './burger-king-cozinha04-routing.module';

import { BurgerKingCozinha04Page } from './burger-king-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingCozinha04PageRoutingModule
  ],
  declarations: [BurgerKingCozinha04Page]
})
export class BurgerKingCozinha04PageModule {}
