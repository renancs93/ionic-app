import {
  Injectable
} from '@angular/core';
import {
  Receita
} from './receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  receitas: Receita[] = [{
      id: '1',
      titulo: 'Feijoada',
      // tslint:disable-next-line: max-line-length
      imagemUrl: 'https://s2.glbimg.com/uRYjx6NzozEZV0ZRl3OWyHVipxs=/0x0:340x263/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/27/43/914/feijoada.jpg',
      ingredientes: ['Feijao', 'Paio', 'Carne de Porco']
    },
    {
      id: '2',
      titulo: 'Tapioca',
      // tslint:disable-next-line: max-line-length
      imagemUrl: 'https://static1.conquistesuavida.com.br/articles//9/56/59/@/18304-tapioca-combina-com-tudo-e-o-melhor-e-article_block_media-3.jpg',
      ingredientes: ['Goma', 'Leite Condensado', 'Coco']
    }
  ]

  getAllReceitas() {
    return [...this.receitas];
  }

  getReceitaById(id: string) {
    return {
      ...this.receitas.find(
        receita => {
          return receita.id === id;
        }
      )
    };
  }

  deleteReceitaById(receitaId: string) {
    console.log(this.receitas);
    this.receitas = this.receitas.filter(
      receita => {
        return receita.id !== receitaId;
      }
    );
    console.log(this.receitas);
  }

  constructor() {}
}