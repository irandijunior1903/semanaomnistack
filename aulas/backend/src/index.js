const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação
 * POST: Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Apagar uma informação
 */

 /**
  * Tipos de parâmentros:
  * 
  * Query Params: Parãmentros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Utilizado para criar ou alterar recursos
  */


app.listen(3333);