import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ReceitaService
} from '../receita.service';
import {
  Receita
} from '../receita.model';
import {
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.page.html',
  styleUrls: ['./receita-detalhe.page.scss'],
})
export class ReceitaDetalhePage implements OnInit {

  receitaAtual: Receita;

  constructor(
    private rotaAtiva: ActivatedRoute,
    private receitaService: ReceitaService,
    private rotas: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.rotaAtiva.paramMap.subscribe(
      parametro => {
        // TODO: não exibir rota inválida
        if (!parametro.has('receitaId')) {
          this.rotas.navigate(['./receita']);
          return;
        }
        const id = parametro.get('receitaId');
        this.receitaAtual = this.receitaService.getReceitaById(id);
        
        console.log(id);
        console.log(this.receitaAtual);
        console.log(typeof (this.receitaAtual.id));

        if (typeof (this.receitaAtual.id) === 'undefined') {
          this.rotas.navigate(['./receita']);
          return;
        }

      }
    );
  }

  deleteReceita() {

    this.alertController.create({

      header: 'Tem certeza?',
      message: 'Você realmente quer deletar essa receita?',
      buttons: [{
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.receitaService.deleteReceitaById(this.receitaAtual.id);
            this.rotas.navigate(['./receita']);
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });

    // this.receitaService.deleteReceitaById(this.receitaAtual.id);
    // this.rotas.navigate(['./receita']);
  }

}