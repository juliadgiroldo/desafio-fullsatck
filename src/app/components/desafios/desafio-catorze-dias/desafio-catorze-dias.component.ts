import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { inject } from '@angular/core';
import { DesafioMargaridaService } from '../../../service/desafio/desafio-margarida/desafio-margarida.service';


@Component({
  selector: 'app-desafio-catorze-dias',
  templateUrl: './desafio-catorze-dias.component.html',
  styleUrl: './desafio-catorze-dias.component.css'
})
export class DesafioCatorzeDiasComponent {
  #apiService = inject(DesafioMargaridaService)
  displayedColumns: string[] = ['position', 'dia', 'atividade', 'action'];
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void{
    this.listaDesafio();
  }

  listaDesafio(){
    this.#apiService.get().subscribe({
      next: (next) => {
        this.dataSource = new MatTableDataSource(next);
      }
    })
  }

  statusAtividade(id: number, checked: boolean){
    this.#apiService.edit(id, checked).subscribe(() => {});
  }
}

