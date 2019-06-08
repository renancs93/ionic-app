import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'receita',
    children: [
      {
        path: '',
        loadChildren: './receita/receita.module#ReceitaPageModule'
      },
      {
        path: ':receitaId',
        loadChildren:
          './receita/receita-detalhe/receita-detalhe.module#ReceitaDetalhePageModule'
      }
    ]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'filmes',
    loadChildren: './filmes/filmes.module#FilmesPageModule'
  },
  {
    path: 'filmes-detalhe/:id',
    loadChildren:
      './filmes/filmes-detalhe/filmes-detalhe.module#FilmesDetalhePageModule'
  },
  {
    path: 'fipe',
    loadChildren: './fipe/fipe.module#FipePageModule'
  },
  {
    path: 'fipe-detalhe/:id',
    loadChildren:
      './fipe/fipe-detalhe/fipe-detalhe.module#FipeDetalhePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
