import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsPageRoutingModule } from './jonny-rockets-routing.module';

import { JonnyRocketsPage } from './jonny-rockets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsPageRoutingModule
  ],
  declarations: [JonnyRocketsPage]
})
export class JonnyRocketsPageModule {}
