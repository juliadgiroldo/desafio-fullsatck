import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesafioSeteDiasComponent } from './desafios/desafio-sete-dias/desafio-sete-dias.component';
import { DesafioCatorzeDiasComponent } from './desafios/desafio-catorze-dias/desafio-catorze-dias.component';
import { DesafioTrintaDiasComponent } from './desafios/desafio-trinta-dias/desafio-trinta-dias.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'desafio-sete-dias',
    component: DesafioSeteDiasComponent
  },
  {
    path: 'desafio-catorze-dias',
    component: DesafioCatorzeDiasComponent
  },
  {
    path: 'desafio-trinta-dias',
    component: DesafioTrintaDiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
