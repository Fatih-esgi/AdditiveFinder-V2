import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-additives',
  templateUrl: './liste-additives.component.html',
  styleUrls: ['./liste-additives.component.scss']
})
export class ListeAdditivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterBy($event){}
  loadData($event){}
}
