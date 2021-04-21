import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private _displayIsSelected$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  displayIsSelected$ = this._displayIsSelected$.asObservable();

  private _additiveList$ = new BehaviorSubject([]);
  public additiveList$ = this._additiveList$.asObservable();

  constructor(private _fireStore: AngularFirestore) {
    this._fireStore
      .collection<any[]>('additifs')
      .stateChanges(['added', 'modified'])
      .pipe(
        map(actions => actions.map(a => {
          const key = a.payload.doc.id;
          const data = a.payload.doc.data();
          return {key, ...data};
        }))
      )
      .subscribe(
        newData => {
          const currentState = this._additiveList$.value.filter(
            product => !newData.find(newP => newP.key === product.key)
          );
          const newState = [
            ...currentState,
            ...newData
          ];
          this._additiveList$.next(newState);
        }
      );
  }

  getItem$(): Observable<any[]> {
    return combineLatest([
      this.displayIsSelected$,
      this.additiveList$
    ]).pipe(
      map(([displayIsSelected, productsList]) => {
        console.log('--->', displayIsSelected, productsList);
        return productsList.filter(
          product => product.isSelected === displayIsSelected
        );
      })
    );
  }

  async addItem(name: string, quantity: number): Promise<void> {
    await this._fireStore.collection<any>('productsList').add({
      name,
      quantity,
      isSelected: false
    });
  }

  async selectItem(item) {
    this._fireStore.collection('productsList').doc(item.key).update({
      isSelected: true
    });
  }

  toogleState(){
    this._displayIsSelected$.next(!this._displayIsSelected$.value);
  }
}