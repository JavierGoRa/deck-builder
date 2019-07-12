import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the DecksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decks',
  templateUrl: 'decks.html',
})
export class DecksPage {

  baraja: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController,
    public alertCtrl : AlertController,
    public dbFirebase :FirebaseDbProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log("tusmuertos")
  }

  ionViewDidEnter(){
    this.dbFirebase.getDecks().subscribe(decks=> {this.baraja = decks;})
    console.log(this.baraja)
  }

  nuevoDeck(){
    let miModal = this.modalCtrl.create('ModalNuevoDeckPage');
    console.log(miModal);
    miModal.present();
  }

  borrarDeck(id){

    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este sitio?',
      buttons: [{
          text: 'No',
          role: 'cancel',
          handler: () => {
            //Sale del alert
          }
      } , {
        text: 'Si',
        handler: () => {
          // borra el dato elegido
          this.dbFirebase.borrarDeck(id);
          console.log('borra2');
        }
      }]
    });

    alert.present();

  }

  muestraDeck(deck){
    console.log('Deck a pasar: ' + deck);
    let modalDeck = this.modalCtrl.create( 'ModalDetalleDeckPage', deck );
    modalDeck.present();
  }

}