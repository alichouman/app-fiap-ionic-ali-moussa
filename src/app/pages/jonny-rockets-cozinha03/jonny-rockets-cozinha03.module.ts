import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha03PageRoutingModule } from './jonny-rockets-cozinha03-routing.module';

import { JonnyRocketsCozinha03Page } from './jonny-rockets-cozinha03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsCozinha03PageRoutingModule
  ],
  declarations: [JonnyRocketsCozinha03Page]
})
export class JonnyRocketsCozinha03PageModule {}
