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
    path: 'burger-king',
    loadChildren: () => import('./pages/burger-king/burger-king.module').then( m => m.BurgerKingPageModule)
  },
  {
    path: 'china-in-box',
    loadChildren: () => import('./pages/china-in-box/china-in-box.module').then( m => m.ChinaInBoxPageModule)
  },
  {
    path: 'dominos',
    loadChildren: () => import('./pages/dominos/dominos.module').then( m => m.DominosPageModule)
  },
  {
    path: 'griletto',
    loadChildren: () => import('./pages/griletto/griletto.module').then( m => m.GrilettoPageModule)
  },
  {
    path: 'habibs',
    loadChildren: () => import('./pages/habibs/habibs.module').then( m => m.HabibsPageModule)
  },
  {
    path: 'jonny-rockets',
    loadChildren: () => import('./pages/jonny-rockets/jonny-rockets.module').then( m => m.JonnyRocketsPageModule)
  },
  {
    path: 'padaria-real',
    loadChildren: () => import('./pages/padaria-real/padaria-real.module').then( m => m.PadariaRealPageModule)
  },
  {
    path: 'pizza-hut',
    loadChildren: () => import('./pages/pizza-hut/pizza-hut.module').then( m => m.PizzaHutPageModule)
  },
  {
    path: 'burger-king-cozinha01',
    loadChildren: () => import('./pages/burger-king-cozinha01/burger-king-cozinha01.module').then( m => m.BurgerKingCozinha01PageModule)
  },
  {
    path: 'burger-king-cozinha02',
    loadChildren: () => import('./pages/burger-king-cozinha02/burger-king-cozinha02.module').then( m => m.BurgerKingCozinha02PageModule)
  },
  {
    path: 'burger-king-cozinha03',
    loadChildren: () => import('./pages/burger-king-cozinha03/burger-king-cozinha03.module').then( m => m.BurgerKingCozinha03PageModule)
  },
  {
    path: 'burger-king-cozinha04',
    loadChildren: () => import('./pages/burger-king-cozinha04/burger-king-cozinha04.module').then( m => m.BurgerKingCozinha04PageModule)
  },
  {
    path: 'burger-king-cozinha05',
    loadChildren: () => import('./pages/burger-king-cozinha05/burger-king-cozinha05.module').then( m => m.BurgerKingCozinha05PageModule)
  },
  {
    path: 'burger-king-cozinha06',
    loadChildren: () => import('./pages/burger-king-cozinha06/burger-king-cozinha06.module').then( m => m.BurgerKingCozinha06PageModule)
  },
  {
    path: 'china-in-box-cozinha01',
    loadChildren: () => import('./pages/china-in-box-cozinha01/china-in-box-cozinha01.module').then( m => m.ChinaInBoxCozinha01PageModule)
  },
  {
    path: 'china-in-box-cozinha02',
    loadChildren: () => import('./pages/china-in-box-cozinha02/china-in-box-cozinha02.module').then( m => m.ChinaInBoxCozinha02PageModule)
  },
  {
    path: 'china-in-box-cozinha03',
    loadChildren: () => import('./pages/china-in-box-cozinha03/china-in-box-cozinha03.module').then( m => m.ChinaInBoxCozinha03PageModule)
  },
  {
    path: 'china-in-box-cozinha04',
    loadChildren: () => import('./pages/china-in-box-cozinha04/china-in-box-cozinha04.module').then( m => m.ChinaInBoxCozinha04PageModule)
  },
  {
    path: 'china-in-box-cozinha05',
    loadChildren: () => import('./pages/china-in-box-cozinha05/china-in-box-cozinha05.module').then( m => m.ChinaInBoxCozinha05PageModule)
  },
  {
    path: 'china-in-box-cozinha06',
    loadChildren: () => import('./pages/china-in-box-cozinha06/china-in-box-cozinha06.module').then( m => m.ChinaInBoxCozinha06PageModule)
  },
  {
    path: 'dominos-cozinha01',
    loadChildren: () => import('./pages/dominos-cozinha01/dominos-cozinha01.module').then( m => m.DominosCozinha01PageModule)
  },
  {
    path: 'dominos-cozinha02',
    loadChildren: () => import('./pages/dominos-cozinha02/dominos-cozinha02.module').then( m => m.DominosCozinha02PageModule)
  },
  {
    path: 'dominos-cozinha03',
    loadChildren: () => import('./pages/dominos-cozinha03/dominos-cozinha03.module').then( m => m.DominosCozinha03PageModule)
  },
  {
    path: 'dominos-cozinha04',
    loadChildren: () => import('./pages/dominos-cozinha04/dominos-cozinha04.module').then( m => m.DominosCozinha04PageModule)
  },
  {
    path: 'dominos-cozinha05',
    loadChildren: () => import('./pages/dominos-cozinha05/dominos-cozinha05.module').then( m => m.DominosCozinha05PageModule)
  },
  {
    path: 'dominos-cozinha06',
    loadChildren: () => import('./pages/dominos-cozinha06/dominos-cozinha06.module').then( m => m.DominosCozinha06PageModule)
  },
  {
    path: 'griletto-cozinha01',
    loadChildren: () => import('./pages/griletto-cozinha01/griletto-cozinha01.module').then( m => m.GrilettoCozinha01PageModule)
  },
  {
    path: 'griletto-cozinha02',
    loadChildren: () => import('./pages/griletto-cozinha02/griletto-cozinha02.module').then( m => m.GrilettoCozinha02PageModule)
  },
  {
    path: 'griletto-cozinha03',
    loadChildren: () => import('./pages/griletto-cozinha03/griletto-cozinha03.module').then( m => m.GrilettoCozinha03PageModule)
  },
  {
    path: 'griletto-cozinha04',
    loadChildren: () => import('./pages/griletto-cozinha04/griletto-cozinha04.module').then( m => m.GrilettoCozinha04PageModule)
  },
  {
    path: 'griletto-cozinha05',
    loadChildren: () => import('./pages/griletto-cozinha05/griletto-cozinha05.module').then( m => m.GrilettoCozinha05PageModule)
  },
  {
    path: 'griletto-cozinha06',
    loadChildren: () => import('./pages/griletto-cozinha06/griletto-cozinha06.module').then( m => m.GrilettoCozinha06PageModule)
  },
  {
    path: 'habibs-cozinha01',
    loadChildren: () => import('./pages/habibs-cozinha01/habibs-cozinha01.module').then( m => m.HabibsCozinha01PageModule)
  },
  {
    path: 'habibs-cozinha02',
    loadChildren: () => import('./pages/habibs-cozinha02/habibs-cozinha02.module').then( m => m.HabibsCozinha02PageModule)
  },
  {
    path: 'habibs-cozinha03',
    loadChildren: () => import('./pages/habibs-cozinha03/habibs-cozinha03.module').then( m => m.HabibsCozinha03PageModule)
  },
  {
    path: 'habibs-cozinha04',
    loadChildren: () => import('./pages/habibs-cozinha04/habibs-cozinha04.module').then( m => m.HabibsCozinha04PageModule)
  },
  {
    path: 'habibs-cozinha05',
    loadChildren: () => import('./pages/habibs-cozinha05/habibs-cozinha05.module').then( m => m.HabibsCozinha05PageModule)
  },
  {
    path: 'habibs-cozinha06',
    loadChildren: () => import('./pages/habibs-cozinha06/habibs-cozinha06.module').then( m => m.HabibsCozinha06PageModule)
  },
  {
    path: 'jonny-rockets-cozinha01',
    loadChildren: () => import('./pages/jonny-rockets-cozinha01/jonny-rockets-cozinha01.module').then( m => m.JonnyRocketsCozinha01PageModule)
  },
  {
    path: 'jonny-rockets-cozinha02',
    loadChildren: () => import('./pages/jonny-rockets-cozinha02/jonny-rockets-cozinha02.module').then( m => m.JonnyRocketsCozinha02PageModule)
  },
  {
    path: 'jonny-rockets-cozinha03',
    loadChildren: () => import('./pages/jonny-rockets-cozinha03/jonny-rockets-cozinha03.module').then( m => m.JonnyRocketsCozinha03PageModule)
  },
  {
    path: 'jonny-rockets-cozinha04',
    loadChildren: () => import('./pages/jonny-rockets-cozinha04/jonny-rockets-cozinha04.module').then( m => m.JonnyRocketsCozinha04PageModule)
  },
  {
    path: 'jonny-rockets-cozinha05',
    loadChildren: () => import('./pages/jonny-rockets-cozinha05/jonny-rockets-cozinha05.module').then( m => m.JonnyRocketsCozinha05PageModule)
  },
  {
    path: 'jonny-rockets-cozinha06',
    loadChildren: () => import('./pages/jonny-rockets-cozinha06/jonny-rockets-cozinha06.module').then( m => m.JonnyRocketsCozinha06PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
