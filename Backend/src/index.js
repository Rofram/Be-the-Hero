const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
* Rota / Recurso
*/

/** 
* Métodos HTTP:
*
* GET: Busca uma informção do back-end
* POST: Criar uma informação no back-end
* PUT: Altera uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/** 
 * Tipos de parâmentros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação) / request.query
 * Route Params: Parâmetros utilizados para identificar recursos / request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos / request.body
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
  * Driver: SELECT * FROM users
  * Query Buider: table('users').select('*').where()
  */

app.listen(3333);
