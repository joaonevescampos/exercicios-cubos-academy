const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {

        let qtdTotal = 0;
        let precoTotal = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            qtdTotal += this.produtos[i].qtd
            precoTotal += this.produtos[i].precoUnit * this.produtos[i].qtd
        }

        precoTotal = precoTotal / 100

        console.log(`
        Cliente: ${this.nomeDoCliente}
        Total de itens: ${qtdTotal}
        Total a pagar: R$${precoTotal.toFixed(2).replace('.', ',')}
        `)
    },

    addProduto: function (produto) {

        for (let i = 0; i < this.produtos.length; i++) {
            if (produto.nome === this.produtos[i].nome) {
                this.produtos[i].qtd += produto.qtd
                break
            }

            if (produto.nome != this.produtos[i].nome && i === this.produtos.length - 1) {
                this.produtos.push(produto)
            }
        }
    },

    imprimirDetalhes: function () {

        let qtdTotal = 0;
        let precoTotal = 0;

        for (produto of this.produtos) {
            qtdTotal += produto.qtd
            precoTotal += produto.precoUnit * produto.qtd
            console.log(`item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.precoUnit * produto.qtd / 100).toFixed(2).replace('.', ',')}`)
        }

        console.log(`
      Total de itens: ${qtdTotal} itens
      Total a pagar: R$ ${(precoTotal / 100).toFixed(2).replace('.', ',')}`)
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda)
carrinho.imprimirResumo()
carrinho.imprimirDetalhes()
