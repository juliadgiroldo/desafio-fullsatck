import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesafioCatorzeDiasComponent } from './components/desafios/desafio-catorze-dias/desafio-catorze-dias.component';
import { DesafioSeteDiasComponent } from './components/desafios/desafio-sete-dias/desafio-sete-dias.component';
import { DesafioTrintaDiasComponent } from './components/desafios/desafio-trinta-dias/desafio-trinta-dias.component';
import { HomeComponent } from './components/home/home.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';


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
