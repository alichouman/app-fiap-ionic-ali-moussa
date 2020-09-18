import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingCozinha02PageRoutingModule } from './burger-king-cozinha02-routing.module';

import { BurgerKingCozinha02Page } from './burger-king-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingCozinha02PageRoutingModule
  ],
  declarations: [BurgerKingCozinha02Page]
})
export class BurgerKingCozinha02PageModule {}
