import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-stars-wars',
  templateUrl: './stars-wars.page.html',
  styleUrls: ['./stars-wars.page.scss'],
})
export class StarsWarsPage implements OnInit {

  resultado: any;
  pessoas: any;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {

    this.starWarsService.consultaPessoasAssincrono().subscribe(result => {
      this.pessoas = result;
      console.log(this.pessoas);
      //this.resultado = result;
      //console.log(this.resultado);
    });

  }

  deletePessoaByName(pessoaName: string) {
    console.log(this.pessoas);
    this.pessoas = this.pessoas.filter(
      pessoas => {
        return pessoas.name !== pessoaName;
      }
    );
    console.log(this.pessoas);
  }

}
