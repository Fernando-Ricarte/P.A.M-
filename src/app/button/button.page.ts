import { Component, OnInit } from '@angular/core';
import { IonApp } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    
  }
  /** função para registrar no console ao pressionar do botão */
  log(){
    console.log('Não está funcionando!');
  }
  
  /**
   * função para aparecer um alerta na tela do usuário
   */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ATENÇÃO!',
      subHeader: 'ERRO FATAL',
      message: 'reinicie a máquina para normalização',
      buttons: [':(']

    });

    await alert.present();
  }



}

