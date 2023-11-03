const { Client , Pool } = require('pg');

const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password:"aranha2001",
    database: 'Gameployee'
};
  
  // Função que cria e retorna um pool de conexões
function criarPool() {
    const pool = new Pool(dbConfig);
    return pool;
}
  
const pool = criarPool();


 module.exports = {
    criarPool,
};
 