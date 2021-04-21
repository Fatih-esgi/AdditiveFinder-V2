import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-additive',
  templateUrl: './liste-additive.component.html',
  styleUrls: ['./liste-additive.component.scss']
})
export class ListeAdditiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterBy($event){}
  loadData($event){}
}
