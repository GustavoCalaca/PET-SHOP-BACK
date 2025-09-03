const { Pool } = require('pg');

// Configure os dados da conexão
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'post',
  port: 5432, // padrão do PostgreSQL
});

// Exporta a pool para uso em outros arquivos
module.exports = pool;