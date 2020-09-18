import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaHutPageRoutingModule } from './pizza-hut-routing.module';

import { PizzaHutPage } from './pizza-hut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaHutPageRoutingModule
  ],
  declarations: [PizzaHutPage]
})
export class PizzaHutPageModule {}
