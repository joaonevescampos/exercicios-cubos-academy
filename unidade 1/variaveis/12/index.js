const capitalInicial= 60_000;
const montante = 90_000;
const tempo = 24;

taxaJuros = ((montante / capitalInicial)** (1 / tempo) - 1) * 100

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros}%, pois após ${tempo} meses você teve que pagar ${montante} reais`)

