import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerKingPageRoutingModule } from './burger-king-routing.module';

import { BurgerKingPage } from './burger-king.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerKingPageRoutingModule
  ],
  declarations: [BurgerKingPage]
})
export class BurgerKingPageModule {}
