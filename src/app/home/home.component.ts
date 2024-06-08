import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router
  ){}

  desafioSeteDias(){
    this.router.navigate(['/desafio-sete-dias']);
  }

  desafioCatorzeDias(){
    this.router.navigate(['/desafio-catorze-dias']);
  }

  desafioTrintaDias(){
    this.router.navigate(['/desafio-trinta-dias']);
  }
}
