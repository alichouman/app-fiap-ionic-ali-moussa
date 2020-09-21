import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha03PageRoutingModule } from './pizza-hut-cozinha03-routing.module';

import { PizzaHutCozinha03Page } from './pizza-hut-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutCozinha03PageRoutingModule
  ],
  declarations: [PizzaHutCozinha03Page]
})
export class PizzaHutCozinha03PageModule {}
