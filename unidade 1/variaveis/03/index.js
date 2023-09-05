const seuDinheiro = 50;
const precoProduto = 110;

const desconto = (precoProduto - seuDinheiro) * 100 / precoProduto;

console.log(`Se você tem R$${seuDinheiro} e o produto custa R$${precoProduto}, o desconto deverá ser de ${desconto}%`)
