import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAdditifComponent } from './detail-additif.component';

const routes: Routes = [
  {path:"",component:DetailAdditifComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailAdditifRoutingModule { }
