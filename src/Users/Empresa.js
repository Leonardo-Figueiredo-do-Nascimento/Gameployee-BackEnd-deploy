class Empresa{
    constructor(nome,email,senha){
        this.id = Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
        this.nome = nome,
        this.email = email,
        this.senha = senha
        this.vagas = []; 
    }


    adicionarVaga(titulo,cargo,descrição,país) {
        this.vagas.push({titulo,cargo,descrição,país})
    }
}

module.exports = Empresa