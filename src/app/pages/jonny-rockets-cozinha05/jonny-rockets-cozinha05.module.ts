import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha05PageRoutingModule } from './jonny-rockets-cozinha05-routing.module';

import { JonnyRocketsCozinha05Page } from './jonny-rockets-cozinha05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsCozinha05PageRoutingModule
  ],
  declarations: [JonnyRocketsCozinha05Page]
})
export class JonnyRocketsCozinha05PageModule {}
