const jogada1 = "tesoura"
const jogada2 = "tesoura"

// pedra se for pedra e tesoura ou vice versa
// tesoura se for papel e tesoura ou vice versa
// papel se for pedra e papel ou vice versa
// empate se for papel e papel ou pedra e pedra tesoura ou tesoura

if ((jogada1 === 'pedra' && jogada2 === 'tesoura') || (jogada1 === 'tesoura' && jogada2 === 'pedra')) {
    console.log('pedra')
} else if ((jogada1 === 'papel' && jogada2 === 'tesoura') || (jogada1 === 'tesoura' && jogada2 === 'papel')) {
    console.log('tesoura')
} else if ((jogada1 === 'pedra' && jogada2 === 'papel') || (jogada1 === 'papel' && jogada2 === 'pedra')) {
    console.log('papel')
} else {
    console.log('empate')
}