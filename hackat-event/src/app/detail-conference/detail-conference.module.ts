import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailConferencePageRoutingModule } from './detail-conference-routing.module';

import { DetailConferencePage } from './detail-conference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailConferencePageRoutingModule
  ],
  declarations: [DetailConferencePage]
})
export class DetailConferencePageModule {}
