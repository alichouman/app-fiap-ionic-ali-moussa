import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha04PageRoutingModule } from './jonny-rockets-cozinha04-routing.module';

import { JonnyRocketsCozinha04Page } from './jonny-rockets-cozinha04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsCozinha04PageRoutingModule
  ],
  declarations: [JonnyRocketsCozinha04Page]
})
export class JonnyRocketsCozinha04PageModule {}
