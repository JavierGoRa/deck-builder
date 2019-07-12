import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the ModalDetalleDeckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detalle-deck',
  templateUrl: 'modal-detalle-deck.html',
})
export class ModalDetalleDeckPage {
  
  decks: any;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl : ViewController) {

      this.decks = this.navParams.data;  

  }

  ionViewDidLoad() {
    console.log("Buenas tardes");
    console.log(this.decks)
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}