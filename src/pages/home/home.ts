import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl : ModalController
    ) {

  }

}
