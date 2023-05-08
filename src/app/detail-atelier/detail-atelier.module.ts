import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAtelierPageRoutingModule } from './detail-atelier-routing.module';

import { DetailAtelierPage } from './detail-atelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetailAtelierPageRoutingModule
  ],
  declarations: [DetailAtelierPage]
})
export class DetailAtelierPageModule {}
