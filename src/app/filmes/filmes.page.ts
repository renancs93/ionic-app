import { Component, OnInit } from '@angular/core';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  resultado: any;
  termoDeBusca: string;

  constructor(private filmesService: FilmeService) { }

  ngOnInit() {
    //this.filmesService.consultaFilmes('The Flash');
  }

  consultaFilmesAssincrono(){
    this.resultado = this.filmesService.consultaFilmesAssincrono(this.termoDeBusca);
    console.log(this.resultado);
  }

}
