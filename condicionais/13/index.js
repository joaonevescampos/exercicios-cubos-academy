//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let desconto;

if(tipoDePagamento === 'credito'){
    desconto = 0.05
}

if(tipoDePagamento === 'cheque'){
    desconto = 0.03
}

if(tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro'){
    desconto = 0.1
}

valorFinal = ((valorDoProduto - valorDoProduto * desconto) / 100).toFixed(2).replace('.', ',')

console.log(`Valor a ser pago: R$${valorFinal}`)


