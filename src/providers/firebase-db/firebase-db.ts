import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB: AngularFireDatabase, 
    public auth: AuthProvider) {
    console.log('Hello FirebaseDbProvider Provider');
  }

  guardaDeck(deck){
    if(!deck.id){
      deck.id = Date.now();
    }
    return this.afDB.database.ref('decks/'+this.auth.getUser()+'/'+deck.id).set(deck)
  }

  getDecks(){
    console.log("getDecks ", this.auth.getUser());
    return this.afDB.list('decks/'+this.auth.getUser()).valueChanges();  
  }

  public borrarDeck(id){
    this.afDB.database.ref('decks/'+this.auth.getUser()+'/'+id).remove();
  }

  getTodosDecks(){
    return this.afDB.list('decks').valueChanges();
  }

}
