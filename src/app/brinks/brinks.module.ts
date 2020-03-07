import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrinksPageRoutingModule } from './brinks-routing.module';

import { BrinksPage } from './brinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrinksPageRoutingModule
  ],
  declarations: [BrinksPage]
})
export class BrinksPageModule {}
