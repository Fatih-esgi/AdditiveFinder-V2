import { Component } from '@angular/core';
import { FavorisComponent } from './@features/favoris/favoris.component';
import { ListeAdditivesComponent } from './@features/liste-additives/liste-additives.component';
import { SearchAdditiveComponent } from './@features/search-additive/search-additive.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'additiveFinderV2';
  linkToSearch = SearchAdditiveComponent;
  linkToListe = ListeAdditivesComponent;
  linkToFav = FavorisComponent;
  
  constructor(

  ){

  }

  

}
