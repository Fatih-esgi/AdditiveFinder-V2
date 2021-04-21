import { Component, OnInit } from '@angular/core';
import { FavorisComponent } from '../favoris/favoris.component';
import { ListeAdditivesComponent } from '../liste-additives/liste-additives.component';
import { SearchAdditiveComponent } from '../search-additive/search-additive.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'additiveFinderV2';

  linkToSearch = SearchAdditiveComponent;
  linkToListe = ListeAdditivesComponent;
  linkToFav = FavorisComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
