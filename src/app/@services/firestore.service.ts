import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private _itemsCollection: AngularFirestoreCollection<any>;
  // utiliser pour le stockage des données en provenance de la base de donnée
  items$: Observable<any[]>;

  constructor(
    private _afs: AngularFirestore // import du service Firebase
  ) {
    // création d'une référence sur une collection
    this._itemsCollection = this._afs.collection<any>('additifs');
    // écouter les element sur une collection
    this.items$ = this._itemsCollection.valueChanges();
  }

}