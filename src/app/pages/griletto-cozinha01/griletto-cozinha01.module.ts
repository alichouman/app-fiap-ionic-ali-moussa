import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoCozinha01PageRoutingModule } from './griletto-cozinha01-routing.module';

import { GrilettoCozinha01Page } from './griletto-cozinha01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoCozinha01PageRoutingModule
  ],
  declarations: [GrilettoCozinha01Page]
})
export class GrilettoCozinha01PageModule {}
