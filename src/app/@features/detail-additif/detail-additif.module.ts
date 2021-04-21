import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailAdditifRoutingModule } from './detail-additif-routing.module';
import { DetailAdditifComponent } from './detail-additif.component';


@NgModule({
  declarations: [
    DetailAdditifComponent
  ],
  imports: [
    CommonModule,
    DetailAdditifRoutingModule
  ]
})
export class DetailAdditifModule { }
