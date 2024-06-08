import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any = [
  { position: 1, dia: 'Dia 1', atividade: 'Reciclagem: Separe o lixo reciclável e ao final do dia entregue à coleta seletiva.' },
  { position: 2, dia: 'Dia 2', atividade: 'Compostagem: Comece uma composteira com restos de alimentos.' },
  { position: 3, dia: 'Dia 3', atividade: 'Cultivo de plantas: Plante ervas e temperos em vasos.' },
  { position: 4, dia: 'Dia 4', atividade: 'Redução de consumo de água: Instale arejadores nas torneiras.' },
  { position: 5, dia: 'Dia 5', atividade: 'Produtos de limpeza naturais: Use produtos de limpeza 100% biodegradáveis.' },
  { position: 6, dia: 'Dia 6', atividade: 'Economia de energia: Troque lâmpadas incandescentes por LEDs.' },
  { position: 7, dia: 'Dia 7', atividade: 'Consumo consciente: Compre de produtores locais e evite embalagens excessivas.' },
  { position: 8, dia: 'Dia 8', atividade: 'Uso de transporte sustentável: Opte por caminhar, andar de bicicleta ou usar transporte público.' },
  { position: 9, dia: 'Dia 9', atividade: 'Jardinagem vertical: Crie um jardim vertical em sua casa ou varanda.' },
  { position: 10, dia: 'Dia 10', atividade: 'Compra consciente: Prefira produtos locais e orgânicos sempre que possível.' },
  { position: 11, dia: 'Dia 11', atividade: 'Redução do uso de plástico: Substitua produtos descartáveis por alternativas reutilizáveis.' },
  { position: 12, dia: 'Dia 12', atividade: 'Educação ambiental: Compartilhe seu conhecimento sobre práticas sustentáveis com amigos e familiares.' },
  { position: 13, dia: 'Dia 13', atividade: 'Reciclagem de eletrônicos: Recicle eletrônicos antigos de forma responsável.' },
  { position: 14, dia: 'Dia 14', atividade: 'Redução do uso de papel: Opte por documentos digitais sempre que possível.' },
  { position: 15, dia: 'Dia 15', atividade: 'Reutilização de materiais: Transforme itens descartados em novos produtos úteis.' },
  { position: 16, dia: 'Dia 16', atividade: 'Economia de água no banho: Reduza o tempo do banho e instale uma cabeça de chuveiro de baixo fluxo.' },
  { position: 17, dia: 'Dia 17', atividade: 'Cozinha sustentável: Evite desperdício de alimentos e utilize sobras em novas receitas.' },
  { position: 18, dia: 'Dia 18', atividade: 'Mobiliário sustentável: Opte por móveis feitos de materiais sustentáveis, como bambu ou madeira certificada.' },
  { position: 19, dia: 'Dia 19', atividade: 'Redução do desperdício de energia: Desconecte aparelhos eletrônicos da tomada quando não estiverem em uso.' },
  { position: 20, dia: 'Dia 20', atividade: 'Utilização de energias renováveis: Considere a instalação de painéis solares ou turbinas eólicas.' },
  { position: 21, dia: 'Dia 21', atividade: 'Upcycling: Transforme itens descartados em novos produtos úteis, como móveis ou decoração.' },
  { position: 22, dia: 'Dia 22', atividade: 'Educação ambiental online: Compartilhe conteúdo sobre práticas sustentáveis nas redes sociais.' },
  { position: 23, dia: 'Dia 23', atividade: 'Redução do uso de embalagens: Opte por produtos a granel ou com embalagens biodegradáveis.' },
  { position: 24, dia: 'Dia 24', atividade: 'Compras sustentáveis: Priorize produtos duráveis e de baixo impacto ambiental.' },
  { position: 25, dia: 'Dia 25', atividade: 'Limpeza de áreas verdes: Participe de mutirões de limpeza em parques e praias.' },
  { position: 26, dia: 'Dia 26', atividade: 'Redução do consumo de carne: Experimente refeições vegetarianas ou veganas pelo menos uma vez por semana.' },
  { position: 27, dia: 'Dia 27', atividade: 'DIY de decoração sustentável: Faça você mesmo objetos de decoração usando materiais reciclados.' },
  { position: 28, dia: 'Dia 28', atividade: 'Redução do uso de ar condicionado: Utilize ventiladores e mantenha portas e janelas abertas para ventilação natural.' },
  { position: 29, dia: 'Dia 29', atividade: 'Doação de roupas e objetos: Doe itens que não utiliza mais para instituições de caridade ou brechós.' },
  { position: 30, dia: 'Dia 30', atividade: 'Apoio a iniciativas sustentáveis: Participe de eventos e projetos com foco na preservação do meio ambiente.' },
];


@Component({
  selector: 'app-desafio-trinta-dias',
  templateUrl: './desafio-trinta-dias.component.html',
  styleUrl: './desafio-trinta-dias.component.css'
})
export class DesafioTrintaDiasComponent {
  displayedColumns: string[] = ['position', 'dia', 'atividade', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
