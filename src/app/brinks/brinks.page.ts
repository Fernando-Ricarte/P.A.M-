import { Component, OnInit } from '@angular/core';
//custom imports
import { AlertService } from '../service/alert.service';


@Component({
  selector: 'app-brinks',
  templateUrl: './brinks.page.html',
  styleUrls: ['./brinks.page.scss'],
})
export class BrinksPage implements OnInit {

  constructor(private showAlert: AlertService) { }

  ngOnInit() {
    this.showAlert.mostraAlerta();
  }

}
