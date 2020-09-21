import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha01PageRoutingModule } from './pizza-hut-cozinha01-routing.module';

import { PizzaHutCozinha01Page } from './pizza-hut-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutCozinha01PageRoutingModule
  ],
  declarations: [PizzaHutCozinha01Page]
})
export class PizzaHutCozinha01PageModule {}
