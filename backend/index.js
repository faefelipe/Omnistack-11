const express = require('express');

const app = express();

app.use(express.json());

/*
  Metodos Http
  Get: buscar/listar uma informação do backend
  Post: Criar uma informação no backend
  Put: Alterar uma informação no backend
  Delete: Deletar uma informação no backend
*/

/* 
  Tipos de Parâmetros:
  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  Route Params: Parâmetros utilizados para identificar recursos
  Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
*/

app.post('/users', (request, response) => {
  const body = request.body;
  
  console.log(body);
  
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: "Felipe Almeida"
  });
});

app.listen(3333);