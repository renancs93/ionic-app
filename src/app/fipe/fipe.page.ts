import { Component, OnInit } from '@angular/core';
import { FipeService } from './fipe.service';

@Component({
  selector: 'app-fipe',
  templateUrl: './fipe.page.html',
  styleUrls: ['./fipe.page.scss'],
})
export class FipePage implements OnInit {

  // Armazena os resultados das consultas
  resultadoMarcas: any;
  resultadoModelos: any;
  resultadoVeiculosModelo: any;
  resultadoFichaVeiculo: any;

  // Guarda os valores das consultas
  termoBuscaTipo: string;
  termoBuscaVeiculos: string;
  termoBuscaVeiculoModelo: string;
  termoBuscaVeiculoFicha: string;

  constructor(private fipeService: FipeService) { }

  ngOnInit() {

  }

  consultaMarcasAssincrono(event) {
    this.termoBuscaTipo = event.target.value;
    this.resultadoMarcas = this.fipeService.consultaMarcas(this.termoBuscaTipo);
  }

  consultaModelosAssincrono(event) {
    this.termoBuscaVeiculos = event.target.value;
    this.resultadoModelos = this.fipeService.consultaVeiculosPorMarca(this.termoBuscaTipo, this.termoBuscaVeiculos);
  }

  consultaVeiculosModeloAssincrono(event) {
    this.termoBuscaVeiculoModelo = event.target.value;

    this.resultadoVeiculosModelo = this.fipeService.consultaVeiculosPorModelo(
      this.termoBuscaTipo,
      this.termoBuscaVeiculos,
      this.termoBuscaVeiculoModelo
    );
  }

  getParams(event){
    this.termoBuscaVeiculoFicha = event.target.value;

    console.log(event);
    console.log(this.termoBuscaVeiculoFicha);
  }


}
