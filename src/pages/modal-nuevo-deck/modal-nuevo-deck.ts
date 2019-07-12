import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the ModalNuevoDeckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-deck',
  templateUrl: 'modal-nuevo-deck.html',
})
export class ModalNuevoDeckPage {

  //public cartaAnadir;
  public deckNuevo: any = [];
  nombreDeck: any;
  cartasTotal = [ 
    {
      name : 'Duendes',
      image: '/assets/imgs/cartas/duendes.png',
      type : 'Común',
      mana: 2,
      isChecked: false
    },{
      name : 'Duendes con lanza',
      image: '/assets/imgs/cartas/duendesconLanza.png',
      type : 'Común',
      mana: 2,
      isChecked: false
    },{
      name : 'Montapuercos',
      image: '/assets/imgs/cartas/montapuercos.png',
      type : 'Especial',
      mana: 4,
      isChecked: false
    },{
      name : 'Choza de duendes',
      image: '/assets/imgs/cartas/chozaDeDuendes.png',
      type : 'Especial',
      mana: 5,
      isChecked: false
    },{
      name : 'Barril de duendes',
      image: '/assets/imgs/cartas/barrilDeDuendes.png',
      type : 'Épica',
      mana: 3,
      isChecked: false
    },{
      name : 'Cazador',
      image: '/assets/imgs/cartas/cazador.png',
      type : 'Épica',
      mana: 4,
      isChecked: false
    },{
      name : 'Esqueletos',
      image: '/assets/imgs/cartas/esqueletos.png',
      type : 'Común',
      mana: 1,
      isChecked: false
    },{
      name : 'Bombardero',
      image: '/assets/imgs/cartas/bombardero.png',
      type : 'Común',
      mana: 3,
      isChecked: false
    },{
      name : 'Lápida',
      image: '/assets/imgs/cartas/lapida.png',
      type : 'Especial',
      mana: 3,
      isChecked: false
    },{
      name : 'Valquiria',
      image: '/assets/imgs/cartas/valquiria.png',
      type : 'Especial',
      mana: 4,
      isChecked: false
    },{
      name : 'Globo bomástico',
      image: '/assets/imgs/cartas/globoBombastico.png',
      type : 'Épica',
      mana: 5,
      isChecked: false
    },{
      name : 'Esqueleto gigante',
      image: '/assets/imgs/cartas/esqueletoGigante.png',
      type : 'Épica',
      mana: 6,
      isChecked: false
    }
  ]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl : ModalController,
    private viewCtrl : ViewController,
    public alertCtrl : AlertController,
    private dbFirebase :FirebaseDbProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoDeckPage');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  guardarDeck(){

    let cantidad = 0; //Recoge la cantidad de cartas elegidas
    for (let i = 0; i < this.cartasTotal.length; i++) {
      if (this.cartasTotal[i].isChecked == true) {
        cantidad ++;
      }
    }

    if (cantidad == 4){ //Valida si ha escogido 4 cartas

      console.log("Nombre : " + this.nombreDeck);
      for (let i = 0; i < this.cartasTotal.length; i++) {
        //Foreach 2.0
        if (this.cartasTotal[i].isChecked == true) {
          //If que guardará en un objeto las cartas que tengan isChecked
          let cartaAnadir = {
            name: this.cartasTotal[i].name ,
            image: this.cartasTotal[i].image ,
            mana: this.cartasTotal[i].mana ,
            type: this.cartasTotal[i].type
          }

          //Mete la carta en el nuevo deck
          this.deckNuevo.push(cartaAnadir);
          console.log("Creado");
          
        }   
      }

      console.log(this.deckNuevo);

      //GUARDA EL DECK
      this.dbFirebase.guardaDeck(this.deckNuevo).then(res=>{
        console.log("Guardado");
        this.cerrarModal();
      })
    } else {
      let alert = this.alertCtrl.create({
        title: 'Debes elegir 4 cartas',
        buttons: [
          {
            text: 'Aceptar',
            role: 'submit',
          }
        ]
      });
  
      alert.present();
    }
    
  }
  
}
