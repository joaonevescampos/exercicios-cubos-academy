const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        this.historicos.push({
            tipo: 'Depósito',
            valor,
        })
        return `Depósito de R$ ${valor / 100} realizado para o cliente: ${this.nome} `
    },
    sacar: function (valor) {
        if (this.saldo < valor) {
            return `Saldo insuficiente para o saque de: ${this.nome}`
        } else {
            this.saldo -= valor
            this.historicos.push({
                tipo: 'Saque',
                valor: valor,
            })
            return `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
        }
    },
    extrato: function () {
        return `
        Extrato de Maria - Saldo: R$ ${this.saldo / 100}
        Histórico:
        Depósito de R$ ${this.historicos[0].valor / 100}
        Saque de R$ ${this.historicos[1].valor / 100}
        `
    }

}

console.log(contaBancaria.depositar(10000))
console.log(contaBancaria.sacar(50000))
console.log(contaBancaria.sacar(5000))
console.log(contaBancaria.extrato())