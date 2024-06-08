import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any = [
  { position: 1, dia: 'Primeiro dia', atividade: 'Reciclagem: Separe o lixo reciclável e ao final do dia entregue à coleta seletiva.' },
  { position: 2, dia: 'Segundo dia', atividade: 'Compostagem: Comece uma composteira com restos de alimentos.' },
  { position: 3, dia: 'Terceiro dia', atividade: 'Cultivo de plantas: Plante ervas e temperos em vasos.' },
  { position: 4, dia: 'Quarto dia', atividade: 'Redução de consumo de água: Instale arejadores nas torneiras.' },
  { position: 5, dia: 'Quinto dia', atividade: 'Produtos de limpeza naturais: Use produtos de limpeza 100% biodegradáveis.' },
  { position: 6, dia: 'Sexto dia', atividade: 'Economia de energia: Troque lâmpadas incandescentes por LEDs.' },
  { position: 7, dia: 'Sétimo dia', atividade: 'Consumo consciente: Compre de produtores locais e evite embalagens excessivas.' },
  { position: 8, dia: 'Oitavo dia', atividade: 'Uso de transporte sustentável: Opte por caminhar, andar de bicicleta ou usar transporte público.' },
  { position: 9, dia: 'Nono dia', atividade: 'Jardinagem vertical: Crie um jardim vertical em sua casa ou varanda.' },
  { position: 10, dia: 'Décimo dia', atividade: 'Compra consciente: Prefira produtos locais e orgânicos sempre que possível.' },
  { position: 11, dia: 'Décimo primeiro dia', atividade: 'Redução do uso de plástico: Substitua produtos descartáveis por alternativas reutilizáveis.' },
  { position: 12, dia: 'Décimo segundo dia', atividade: 'Educação ambiental: Compartilhe seu conhecimento sobre práticas sustentáveis com amigos e familiares.' },
  { position: 13, dia: 'Décimo terceiro dia', atividade: 'Reciclagem de eletrônicos: Recicle eletrônicos antigos de forma responsável.' },
  { position: 14, dia: 'Décimo quarto dia', atividade: 'Redução do uso de papel: Opte por documentos digitais sempre que possível.' },
];


@Component({
  selector: 'app-desafio-catorze-dias',
  templateUrl: './desafio-catorze-dias.component.html',
  styleUrl: './desafio-catorze-dias.component.css'
})
export class DesafioCatorzeDiasComponent {
  displayedColumns: string[] = ['position', 'dia', 'atividade', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
