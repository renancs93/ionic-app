import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmesDetalhePage } from './filmes-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilmesDetalhePage]
})
export class FilmesDetalhePageModule {}
