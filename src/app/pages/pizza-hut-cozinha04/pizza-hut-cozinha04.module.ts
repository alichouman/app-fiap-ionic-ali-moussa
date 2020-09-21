import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha04PageRoutingModule } from './pizza-hut-cozinha04-routing.module';

import { PizzaHutCozinha04Page } from './pizza-hut-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutCozinha04PageRoutingModule
  ],
  declarations: [PizzaHutCozinha04Page]
})
export class PizzaHutCozinha04PageModule {}
