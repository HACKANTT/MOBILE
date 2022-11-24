import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailHackPage } from './detail-hack.page';

const routes: Routes = [
  {
    path: '',
    component: DetailHackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailHackPageRoutingModule {}
