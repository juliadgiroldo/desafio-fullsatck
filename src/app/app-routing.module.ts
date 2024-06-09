import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesafioSeteDiasComponent } from './desafios/desafio-sete-dias/desafio-sete-dias.component';
import { DesafioCatorzeDiasComponent } from './desafios/desafio-catorze-dias/desafio-catorze-dias.component';
import { DesafioTrintaDiasComponent } from './desafios/desafio-trinta-dias/desafio-trinta-dias.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

const routes: Routes = [
  {
    path: '', component: TelaInicialComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'desafio-petunia',
        component: DesafioSeteDiasComponent
      },
      {
        path: 'desafio-margarida',
        component: DesafioCatorzeDiasComponent
      },
      {
        path: 'desafio-jasmim',
        component: DesafioTrintaDiasComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
