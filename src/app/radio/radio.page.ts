import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  checkboxlist: any;
  isIndeterminate:boolean;
  check: boolean;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.checkboxlist = [
      {
        label:"caixa1",
        isChecked: false,
        value:"c1"
      },
      {
        label:"caixa2",
        isChecked: false,
        value:"c2"
      },
      {
        label:"caixa3",
        isChecked: false,
        value:"c3"
      },
    ]

  }
  /*logs utilizados para resgistrar as opções do radio e checkbox*/ 
  
  
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

  /**
   * Método que escreve no console o resultado do checkbox 
   * parametros: 
   * event -  parametro do tipo any que recebe um objeto proveniente da mudança dos itens da lista do checkbox
   * 
   * atributos de event - checked -> retorna true ou false com a condição do checkbox
   *                      value -> retorna o valor atribuido ao checkbox seja pelo código ou pelo usúario
   * 
   * Exemplo de uso do obj event: event.detail.<atributo>
   */
  escreveConsole(event: any){
    console.log('Estado do checkbox: ' + event.detail.checked);
    console.log('Nome do checkbox: ' + event.detail.value);
  }

  /**/
  checkMaster(){
    setTimeout(()=>{
      this.checkboxlist.forEach(obj => {
        obj.isChecked = this.check;
      });
    },10);
  }


}
