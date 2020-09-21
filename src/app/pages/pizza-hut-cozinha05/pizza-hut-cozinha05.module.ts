import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha05PageRoutingModule } from './pizza-hut-cozinha05-routing.module';

import { PizzaHutCozinha05Page } from './pizza-hut-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutCozinha05PageRoutingModule
  ],
  declarations: [PizzaHutCozinha05Page]
})
export class PizzaHutCozinha05PageModule {}
