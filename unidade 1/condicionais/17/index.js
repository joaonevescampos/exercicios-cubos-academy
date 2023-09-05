//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorDoProdutoEmReais = valorDoProduto / 100

parcelas = valorDoProdutoEmReais / quantidadeDoParcelamento

parcelasRestantes = quantidadeDoParcelamento - valorPago / parcelas

console.log(`Restam ${parcelasRestantes} de ${parcelas}`)