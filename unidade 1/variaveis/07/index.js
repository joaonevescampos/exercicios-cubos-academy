const populacaoInicial = 1000;
const quantTransmissao = 4;
const tempo = 7;

populacaoInfectada = populacaoInicial * quantTransmissao ** (tempo / 7)

console.log(`A quantidade de pessoas infectadas é de ${populacaoInfectada} pessoas`)