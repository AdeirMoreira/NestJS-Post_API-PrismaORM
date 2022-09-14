<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API de Posts Com Prisma 📝

Essa API foi desenvolvida com a finalidade de praticar o framework [NESTJS](https://nestjs.com/), o ORM [PRISMA](https://www.prisma.io/docs/getting-started), o banco de dados [PostgreSQL](https://www.postgresql.org/) e o [Docker](https://docs.docker.com/)..<br> 
Trata-se de  uma API para cadastrar um post e seu autor.  

## Status 🚧🔨

- em construção

## Tecnologias e Técnicas 🛠
- [NodeJS](https://nodejs.org/pt-br/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/docs/getting-started)
- [PostgreSQL](https://www.postgresql.org/)
- POO
- S-O-L-I-D
- Conteinerização com Docker

## ✔️ Features

- [x] Cadastro de Posts e Autores
- [x] Validação dos dados enviados nas requisições
- [x] Cadastro, consulta, edição e remoção dos Posts

## Modelagem do banco de dados 🎲

O banco de dadas é modelado com 2 entidades: Post e User(Autor), cada uma tem sua respectiva tabela.

## Rodar e testar o case com o Docker 🐳

Caso tenha o docker em sua maquina, dê o sequinte comando, o servidor rodará na porta 3000.

Para iniciar o servidor
```
docker compose up
```
Para iniciar o Prisma Studio
```
docker compose exec app bash
npx prisma studio
```
Prisma Studio estará disponivel em http://localhost:5555/

Após iniciar o servidor, é possivel testar todos os endpoints no arquivo api.http no qual estão configurados e prontos para uso, bastando substituir os ids nas requisições quando necessario. O arquivo se encotra na raiz do projeto. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/98994187/190247244-892d46d4-011c-421a-9518-f9bb015bc784.png" width="400" height="400" alt="Nest Logo" />
</p>

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br />   
</table>
