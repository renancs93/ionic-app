import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FipeService } from '../fipe.service';
import { FipePage } from '../fipe.page';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-fipe-detalhe',
  templateUrl: './fipe-detalhe.page.html',
  styleUrls: ['./fipe-detalhe.page.scss'],
})
export class FipeDetalhePage implements OnInit {

  // Variavel com os dados completos do veiculo
  veiculo = null;

  constructor(private activatedRoute: ActivatedRoute, private fipeService: FipeService, private fipePage: FipePage) { }

  ngOnInit() {

    // pega o id da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    const tipo = this.fipePage.termoBuscaTipo;
    console.log(tipo);

    // busca na API os dados do id
    this.consultaVeiculoFichaAssincrono(id);

  }

  consultaVeiculoFichaAssincrono(id: string) {
    this.fipeService.consultaVeiculoFichaDetalhada('carros', '21', '4828', '2013-1' /*id*/).subscribe(result => {
      this.veiculo = result;
      console.log(this.veiculo);
    });
  }

}
