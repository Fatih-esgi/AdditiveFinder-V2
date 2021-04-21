import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/@services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-liste-additives',
  templateUrl: './liste-additives.component.html',
  styleUrls: ['./liste-additives.component.scss']
})
export class ListeAdditivesComponent implements OnInit {
  items$;
  max = 10;
  min = 0;

  constructor(
    private _fireStore : FirestoreService
  ) { }

  ngOnInit(): void {
    this.items$ = this._fireStore.items$
  }
  filterBy($event)  {
    
    const {detail:  {value = null} = {}} = $event;
    // syntaxiquement identique: ({detail:  {value = null} = {}} = $event) === ($event.detail.value);
    this.items$ = this._fireStore.items$.pipe(
      map(items =>  {
        console.log(value);
        if (value === null || value === 'all' ) return items;
        return items.filter(i => i.level === value);
      })
    );
  }

  async loadData(event) {
    this.max = this.max + 10;
    event.target.complete();
  }
}
