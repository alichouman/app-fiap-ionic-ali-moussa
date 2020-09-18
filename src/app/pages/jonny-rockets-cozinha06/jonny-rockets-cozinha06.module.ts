import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha06PageRoutingModule } from './jonny-rockets-cozinha06-routing.module';

import { JonnyRocketsCozinha06Page } from './jonny-rockets-cozinha06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsCozinha06PageRoutingModule
  ],
  declarations: [JonnyRocketsCozinha06Page]
})
export class JonnyRocketsCozinha06PageModule {}
