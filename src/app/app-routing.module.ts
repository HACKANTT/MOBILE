import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detail-hack',
    loadChildren: () => import('./detail-hack/detail-hack.module').then( m => m.DetailHackPageModule)
  },
  {
    path: 'detail-atelier',
    loadChildren: () => import('./detail-atelier/detail-atelier.module').then( m => m.DetailAtelierPageModule)
  },  {
    path: 'detail-conference',
    loadChildren: () => import('./detail-conference/detail-conference.module').then( m => m.DetailConferencePageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
