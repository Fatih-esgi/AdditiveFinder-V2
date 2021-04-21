import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeAdditiveRoutingModule } from './liste-additive-routing.module';
import { ListeAdditiveComponent } from './liste-additive.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ListeAdditiveComponent
  ],
  imports: [
    CommonModule,
    ListeAdditiveRoutingModule,
    IonicModule
  ]
})
export class ListeAdditiveModule { }
