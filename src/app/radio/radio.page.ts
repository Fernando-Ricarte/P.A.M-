import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  
  log1(){
    console.log('1º valor do radio pressionado!');
  }
  log2(){
    console.log('2º valor do radio pressionado!');
  }
  log3(){
    console.log('3º valor do radio pressionado!');
  }

  check1(){
    console.log('1º valor do checkbox pressionado!');
  }
  check2(){
    console.log('2º valor do checkbox pressionado!');
  }
  check3(){
    console.log('3º valor do checkbox pressionado!');
  }

}
