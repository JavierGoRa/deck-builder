import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  
})
export class InicioPage {

  baraja:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public dbFirebase :FirebaseDbProvider,
    ) {
  }

  ionViewDidLoad() {
    this.dbFirebase.getDecks().subscribe(decks=> {this.baraja = decks;})
    console.log(this.baraja)  
  }

}
