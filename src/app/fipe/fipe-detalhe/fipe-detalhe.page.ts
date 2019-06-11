import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FipeService } from '../fipe.service';
import { Carro } from '../carro.model';

@Component({
  selector: 'app-fipe-detalhe',
  templateUrl: './fipe-detalhe.page.html',
  styleUrls: ['./fipe-detalhe.page.scss'],
})
export class FipeDetalhePage implements OnInit {

  // Variavel com os dados completos do veiculo
  carro: Carro;

  constructor(private activatedRoute: ActivatedRoute, private fipeService: FipeService) { }

  ngOnInit() {

    // pega o id da rota
    const tipo = this.activatedRoute.snapshot.paramMap.get('tipo');
    const keyMarca = this.activatedRoute.snapshot.paramMap.get('keyMarca');
    const keyModelo = this.activatedRoute.snapshot.paramMap.get('keyModelo');
    const keyId = this.activatedRoute.snapshot.paramMap.get('keyId');

    console.log("Tipo:", tipo);
    console.log("KeyMarca:", keyMarca);
    console.log("KeyModelo:", keyModelo);
    console.log("KeyID:", keyId);

    // busca na API os dados do id
    this.consultaVeiculoFichaAssincrono(tipo, keyMarca, keyModelo, keyId);

  }

  async consultaVeiculoFichaAssincrono(tipo: string, keyMarca: string, keyModelo: string, keyId: string) {
  
    await this.fipeService.consultaVeiculoFichaDetalhada(tipo, keyMarca, keyModelo, keyId).subscribe(result => {
      this.carro = result;
      console.log("CARRO: ", this.carro);
    });
  }

}
