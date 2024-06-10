# Projeto Eco

Este projeto foi desenvolvido com a finalidade de ajudar as pessoas a desenvolverem hábitos sustentáveis ou permanecerem com eles. São propostos 3 desafios com públicos alvo diferentes.

## Uso do projeto

O projeto conta com uma página que contém a logo do projeto e uma explicação detalhada sobre o mesmo. Logo após possui os 3 desafios: Desafio Petúnia, que para as pessoas que já possuem hábitos sustentáveis, Desafio Margarida, é para as pessoas que possuem hábitos sustentáveis, mas querem expandi-los e o Desafio Jasmim, que possue a finalidade de ajudar as pessoas que não possuem nenhum hábito sustentável a desenvolvê-los.

Ao escolher um dos desafios, o usuário será direcionado a página do desafio selecionado. Na página do desafio, o usuário encontrará as atividades diárias a serem feitas, após finalizá-las ele deverá marcar a atividade como concluída.

Para voltar a página inicial, o usuário poderá utilizar a barra de navegação clicando no botão de menu na header ou clicando no nome do projeto ou logo também na header. O usuário também pode utilizar a barra de naveção para ser redirecionado aos desafios.

## Stack utilizada

**Front-end:** Angular 18, Angular Material, CSS.

**Servidor:** json-server

Foi-se utilizado json-server para simular o consumo de uma API.


## Instalação do json-server e angular 

Angular 

```bash
  npm install -g @angular/cli
```

Json-server

```bash
  npm i json-server
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/juliadgiroldo/desafio-fullsatck.git
```

Entre no diretório do projeto

```bash
  cd desafio-fullsatck
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor json

```bash
  json-server --watch db.json
```

Em uma nova aba do terminal,

Entre no diretório do projeto

```bash
  cd desafio-fullsatck
```
e inicie o servidor angular

```bash
  ng serve
```
acesse o link para utilizar o projeto na WEB (http://localhost:4200/)
