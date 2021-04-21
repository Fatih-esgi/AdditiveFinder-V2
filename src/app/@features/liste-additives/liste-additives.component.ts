import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/@services/firestore.service';

@Component({
  selector: 'app-liste-additives',
  templateUrl: './liste-additives.component.html',
  styleUrls: ['./liste-additives.component.scss']
})
export class ListeAdditivesComponent implements OnInit {
  items$;

  constructor(
    private _fireStore : FirestoreService
  ) { }

  ngOnInit(): void {
    this.items$ = this._fireStore.items$
  }
  filterBy($event){}
  loadData($event){}
}
