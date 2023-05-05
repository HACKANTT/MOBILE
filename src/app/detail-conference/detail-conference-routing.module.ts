import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailConferencePage } from './detail-conference.page';

const routes: Routes = [
  {
    path: '',
    component: DetailConferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailConferencePageRoutingModule {}
