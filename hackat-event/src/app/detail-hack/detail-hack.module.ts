import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailHackPageRoutingModule } from './detail-hack-routing.module';

import { DetailHackPage } from './detail-hack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailHackPageRoutingModule
  ],
  declarations: [DetailHackPage]
})
export class DetailHackPageModule {}
