import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FipeDetalhePage } from './fipe-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: FipeDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FipeDetalhePage]
})
export class FipeDetalhePageModule {}
