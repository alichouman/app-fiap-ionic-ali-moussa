import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha03PageRoutingModule } from './burger-king-cozinha03-routing.module';

import { BurgerKingCozinha03Page } from './burger-king-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingCozinha03PageRoutingModule
  ],
  declarations: [BurgerKingCozinha03Page]
})
export class BurgerKingCozinha03PageModule {}
