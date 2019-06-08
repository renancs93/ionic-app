import { Component, OnInit } from '@angular/core';
import { Receita } from './receita.model';
import { ReceitaService } from './receita.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  receitas: Receita[];
  constructor(private receitasService: ReceitaService) { }

  ngOnInit() {
    this.receitas = this.receitasService.getAllReceitas();
  }

  ionViewWillEnter(){
    this.receitas = this.receitasService.getAllReceitas();
  }

}
