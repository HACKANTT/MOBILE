import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAtelierPage } from './detail-atelier.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAtelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAtelierPageRoutingModule {}
