import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeAdditiveRoutingModule } from './liste-additive-routing.module';
import { ListeAdditiveComponent } from './liste-additive.component';


@NgModule({
  declarations: [
    ListeAdditiveComponent
  ],
  imports: [
    CommonModule,
    ListeAdditiveRoutingModule
  ]
})
export class ListeAdditiveModule { }
