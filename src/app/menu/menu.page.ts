import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  //declarações
  itens: any;

  //funções
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    /*array responsavel por criar os elementos do side menu*/
    this.itens = [
      {
        'id'     : 1,
        'nome'   : 'Botões',
        'path'  : 'button'
      },
      {
        'id'     : 2,
        'nome'   : 'Caixas de seleção',
        'path'  : 'radio'
      },
      {
        'id'     : 3,
        'nome'   : 'Testes',
        'path'  : 'brinks'
      },
      {
        'id'     : 4,
        'nome'   : 'Imagens',
        'path'  : 'images'
      }

    ];
  }
//métodos
  openPage(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

}
