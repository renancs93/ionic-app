import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filmes-detalhe',
  templateUrl: './filmes-detalhe.page.html',
  styleUrls: ['./filmes-detalhe.page.scss'],
})
export class FilmesDetalhePage implements OnInit {

  detalhes = null;

  constructor(private activatedRoute: ActivatedRoute, private filmeService: FilmeService) { }

  ngOnInit() {
    // pega o id da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // busca na API os dados do id
    this.filmeService.getFilmesById(id).subscribe(result => {
      this.detalhes = result;
      console.log(this.detalhes);
    });
  }

  abrirLinkExterno() {
    // window.open é nativo do JS
    window.open(this.detalhes.Website, '_blank');
  }

}
