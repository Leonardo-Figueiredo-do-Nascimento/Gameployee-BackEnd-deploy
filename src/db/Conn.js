const { Client , Pool } = require('pg');

const connectionString = "postgres://postgres:G53B4dcg6D*62fAab32eDa2c6133B1aE@roundhouse.proxy.rlwy.net:31096/railway"

  // Função que cria e retorna um pool de conexões
function criarPool() {
    const pool = new Pool({connectionString});
    return pool;
}
  
const pool = criarPool();


 module.exports = {
    criarPool,
};
 