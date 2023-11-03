const {criarPool} = require('./Conn')
const Empresa = require('../Users/Empresa.js');
const pool = criarPool()

async function logarEmpresa(email,senha, callback){
    const query = 'SELECT * FROM tb_empresas WHERE email = $1 AND senha = $2'
    pool.query(query,[email,senha],callback)
}
function inserirEmpresa(novaEmpresa, callback){
    const query = 'INSERT INTO tb_empresas(id_empresa,nome_empresa, email, senha) VALUES ($1,$2,$3,$4)'
    pool.query(query,[novaEmpresa.id,novaEmpresa.nome,novaEmpresa.email,novaEmpresa.senha],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}
function inserirVaga(novaVaga,callback){
    const query = 'INSERT INTO tb_vagas_empresas(id_vaga,titulo, cargo, descrição,nome_empresa) VALUES ($1,$2,$3,$4,$5)'
    pool.query(query,[novaVaga.id,novaVaga.titulo,novaVaga.cargo,novaVaga.descricao,novaVaga.nome_empresa],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}
function inserirConcurso(titulo, cargo, descrição,nome_empresa,callback){
    const query = 'INSERT INTO tb_concursos(id_concurso,titulo_concurso, cargo, descrição,nome_empresa) VALUES ($1,$2,$3,$4,$5)'
    pool.query(query,[ Math.floor(Math.random() * (10000 - 10 + 1)) + 10,titulo,cargo,descrição,nome_empresa],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}
async function buscarConcursosLocais(nome_empresa,callback){
    const query = 'SELECT id_concurso,titulo_concurso,cargo,descrição FROM tb_concursos '+
                  'LEFT JOIN tb_empresas ON tb_concursos.nome_empresa = tb_empresas.nome_empresa '+
                  'WHERE tb_concursos.nome_empresa = $1'
    pool.query(query,[nome_empresa],callback)
}
async function buscarDadosConcurso(id_concurso,callback){
    const query = 'SELECT id_concurso,titulo_concurso,cargo,descrição FROM tb_concursos '+
                  'LEFT JOIN tb_empresas ON tb_concursos.nome_empresa = tb_empresas.nome_empresa '+
                  'WHERE tb_concursos.id_concurso = $1'
    pool.query(query,[id_concurso],callback)
}
async function buscarConcursos(callback){
    const query = 'SELECT id_concurso,titulo_concurso,cargo,descrição,te.nome_empresa FROM tb_concursos '+
                  'LEFT JOIN tb_empresas te ON tb_concursos.nome_empresa = te.nome_empresa '
    pool.query(query,callback)
}
async function buscarVagasLocais(nome_empresa,callback){
    const query = 'SELECT id_vaga,titulo,cargo,descrição FROM tb_vagas_empresas '+
                  'LEFT JOIN tb_empresas ON tb_vagas_empresas.nome_empresa = tb_empresas.nome_empresa '+
                  'WHERE tb_vagas_empresas.nome_empresa = $1'
    pool.query(query,[nome_empresa],callback)
}
async function buscarVagas(callback){
    const query = 'SELECT titulo,cargo,descrição,tb_empresas.email,tb_vagas_empresas.nome_empresa FROM tb_vagas_empresas '+
                  'LEFT JOIN tb_empresas ON tb_vagas_empresas.nome_empresa = tb_empresas.nome_empresa '
    pool.query(query,callback)
}
function deletarConcurso(id_concurso,callback){
    const query = 'DELETE FROM tb_concursos WHERE id_concurso = $1'
    pool.query(query,[id_concurso],(err,res)=>{
        if(err){
            callback(err)
        } else{
            callback(null)
        }
    })
}
function deletarVaga(id_vaga,callback){
    const query = 'DELETE FROM tb_vagas_empresas WHERE id_vaga = $1'
    pool.query(query,[id_vaga],(err,res)=>{
        if(err){
            callback(err)
        } else{
            callback(null)
        }
    })
}
module.exports = {buscarDadosConcurso,deletarConcurso,deletarVaga,inserirEmpresa,inserirConcurso,buscarConcursos,buscarVagas,buscarConcursosLocais,buscarVagasLocais,inserirVaga,logarEmpresa}