import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAdditivesComponent } from './liste-additives.component';

const routes: Routes = [
  {
    path:"",
    component: ListeAdditivesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeAdditivesRoutingModule { }
