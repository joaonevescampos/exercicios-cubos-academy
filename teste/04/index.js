const capital = 1000;
const taxa = 0.125;
const tempo = 5;

const montante = capital * (1 + taxa) ** tempo

console.log(`Com um capital inicial de R$${capital} aplicado durante ${tempo} meses a uma taxa de ${taxa * 100}% de juros, o montante é de R$${montante}.`)