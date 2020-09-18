import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrilettoPageRoutingModule } from './griletto-routing.module';

import { GrilettoPage } from './griletto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrilettoPageRoutingModule
  ],
  declarations: [GrilettoPage]
})
export class GrilettoPageModule {}
