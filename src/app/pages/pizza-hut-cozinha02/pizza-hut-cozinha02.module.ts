import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutCozinha02PageRoutingModule } from './pizza-hut-cozinha02-routing.module';

import { PizzaHutCozinha02Page } from './pizza-hut-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutCozinha02PageRoutingModule
  ],
  declarations: [PizzaHutCozinha02Page]
})
export class PizzaHutCozinha02PageModule {}
