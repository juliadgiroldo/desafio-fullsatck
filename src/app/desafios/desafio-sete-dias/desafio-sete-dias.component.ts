import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DesafioPetuniaService } from '../../service/desafio/desafio-petunia/desafio-petunia.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-desafio-sete-dias',
  templateUrl: './desafio-sete-dias.component.html',
  styleUrl: './desafio-sete-dias.component.css'
})


export class DesafioSeteDiasComponent {

  #apiService = inject(DesafioPetuniaService)
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

