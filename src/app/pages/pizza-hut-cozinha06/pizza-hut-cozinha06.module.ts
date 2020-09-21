import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha06PageRoutingModule } from './pizza-hut-cozinha06-routing.module';

import { PizzaHutCozinha06Page } from './pizza-hut-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutCozinha06PageRoutingModule
  ],
  declarations: [PizzaHutCozinha06Page]
})
export class PizzaHutCozinha06PageModule {}
