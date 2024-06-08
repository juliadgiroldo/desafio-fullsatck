import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA: any = [
  {position: 1, dia: 'Primeiro dia', atividade: 'Reciclagem: Separe o lixo reciclável e ao final do dia entregue à coleta seletiva.'},
  {position: 2, dia: 'Segundo dia', atividade: 'Compostagem: Comece uma composteira com restos de alimentos.'},
  {position: 3, dia: 'Terceiro dia', atividade: 'Cultivo de plantas: Plante ervas e temperos em vasos.'},
  {position: 4, dia: 'Quarto dia', atividade: 'Redução de consumo de água: Instale arejadores nas torneiras.'},
  {position: 5, dia: 'Quinto dia', atividade: 'Produtos de limpeza naturais: Use produtos de limpeza 100% biodegradáveis.'},
  {position: 6, dia: 'Sexto dia', atividade: 'Economia de energia: Troque lâmpadas incandescentes por LEDs.'},
  {position: 7, dia: 'Sétimo dia', atividade: 'Consumo consciente: Compre de produtores locais e evite embalagens excessivas.'},
];

@Component({
  selector: 'app-desafio-sete-dias',
  templateUrl: './desafio-sete-dias.component.html',
  styleUrl: './desafio-sete-dias.component.css'
})


export class DesafioSeteDiasComponent {
  displayedColumns: string[] = ['position', 'dia', 'atividade', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
