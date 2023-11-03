class Desenvolvedor{
    constructor(nome,email,senha,cargo,telefone){
        this.id = Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
        this.nome = nome,
        this.cargo = cargo,
        this.email = email,
        this.senha = senha,
        this.telefone = telefone
    }

    trabalhos = [];

    adicionarTrabalho(arquivo) {
        this.trabalhos.push(arquivo)
    }
}

module.exports = Desenvolvedor