import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabibsPageRoutingModule } from './habibs-routing.module';

import { HabibsPage } from './habibs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabibsPageRoutingModule
  ],
  declarations: [HabibsPage]
})
export class HabibsPageModule {}
