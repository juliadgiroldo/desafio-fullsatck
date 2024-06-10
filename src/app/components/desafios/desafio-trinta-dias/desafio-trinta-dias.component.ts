import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DesafioJasmimService } from '../../../service/desafio/desafio-jasmim/desafio-jasmim.service';

@Component({
  selector: 'app-desafio-trinta-dias',
  templateUrl: './desafio-trinta-dias.component.html',
  styleUrl: './desafio-trinta-dias.component.css'
})
export class DesafioTrintaDiasComponent {
  #apiService = inject(DesafioJasmimService)
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

