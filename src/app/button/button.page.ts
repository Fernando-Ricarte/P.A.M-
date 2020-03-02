import { Component, OnInit } from '@angular/core';
import { IonApp } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  log(){
    console.log('Funcionando');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Faça Elevar!!',
      subHeader: 'O cosmo no seu coração!',
      message: 'Todo Mal Combater, despertar, o poder!...',
      buttons: ['OK!']
    });

    await alert.present();
  }

}
