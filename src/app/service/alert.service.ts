import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  /**
   * Serviço criado em sala de aula 
   */
  mostraAlerta(){
    alert("Módulo utilizado para realização de testes com ionic")
  }
}
