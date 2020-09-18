import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonnyRocketsCozinha02PageRoutingModule } from './jonny-rockets-cozinha02-routing.module';

import { JonnyRocketsCozinha02Page } from './jonny-rockets-cozinha02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonnyRocketsCozinha02PageRoutingModule
  ],
  declarations: [JonnyRocketsCozinha02Page]
})
export class JonnyRocketsCozinha02PageModule {}
