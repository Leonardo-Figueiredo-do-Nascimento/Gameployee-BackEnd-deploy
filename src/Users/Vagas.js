class Vaga{
    constructor(titulo,cargo,descricao,nome_empresa){
        this.id = Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
        this.titulo = titulo,
        this.cargo = cargo,
        this.descricao = descricao,
        this.nome_empresa = nome_empresa
    }
}

module.exports = Vaga