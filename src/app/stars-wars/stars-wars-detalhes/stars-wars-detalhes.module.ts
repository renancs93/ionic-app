import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StarsWarsDetalhesPage } from './stars-wars-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: StarsWarsDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StarsWarsDetalhesPage]
})
export class StarsWarsDetalhesPageModule {}
