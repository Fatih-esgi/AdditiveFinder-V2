import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';
import { SearchAdditiveComponent } from './@features/search-additive/search-additive.component';
import { ListeAdditivesComponent } from './@features/liste-additives/liste-additives.component';
import { ColorPipe } from './@shared/pipes/color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchAdditiveComponent,
    ListeAdditivesComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    IonicModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
