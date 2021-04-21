import { Component } from '@angular/core';
import { FavorisComponent } from './@features/favoris/favoris.component';
import { FavorisModule } from './@features/favoris/favoris.module';
import { ListeAdditiveComponent } from './@features/liste-additive/liste-additive.component';
import { ListeAdditiveModule } from './@features/liste-additive/liste-additive.module';
import { SearchAdditiveComponent } from './@features/search-additive/search-additive.component';
import { SearchAdditiveModule } from './@features/search-additive/search-additive.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'additiveFinderV2';
  linkToSearch = SearchAdditiveComponent;
  linkToListe = ListeAdditiveComponent;
  linkToFav = FavorisComponent;
  
  constructor(

  ){

  }

  

}
