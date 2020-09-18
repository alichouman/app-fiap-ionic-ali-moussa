import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaRealPageRoutingModule } from './padaria-real-routing.module';

import { PadariaRealPage } from './padaria-real.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaRealPageRoutingModule
  ],
  declarations: [PadariaRealPage]
})
export class PadariaRealPageModule {}
