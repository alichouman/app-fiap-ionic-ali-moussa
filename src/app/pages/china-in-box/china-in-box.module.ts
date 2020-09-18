import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinaInBoxPageRoutingModule } from './china-in-box-routing.module';

import { ChinaInBoxPage } from './china-in-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinaInBoxPageRoutingModule
  ],
  declarations: [ChinaInBoxPage]
})
export class ChinaInBoxPageModule {}
