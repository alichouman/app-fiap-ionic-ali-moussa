import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha01PageRoutingModule } from './jonny-rockets-cozinha01-routing.module';

import { JonnyRocketsCozinha01Page } from './jonny-rockets-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsCozinha01PageRoutingModule
  ],
  declarations: [JonnyRocketsCozinha01Page]
})
export class JonnyRocketsCozinha01PageModule {}
