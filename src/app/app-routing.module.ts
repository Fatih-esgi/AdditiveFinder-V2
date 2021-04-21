import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAdditifModule } from './@features/detail-additif/detail-additif.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./@features/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./@features/detail-additif/detail-additif.module').then( m => m.DetailAdditifModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
