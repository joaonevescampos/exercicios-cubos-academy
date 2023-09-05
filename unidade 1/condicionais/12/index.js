const diaDaSemana = 8;
const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

for (dia of diasDaSemana) {
    if ((diasDaSemana.indexOf(dia) + 1) === diaDaSemana) {
        console.log(dia)
    }
}

if (diaDaSemana > 7 || diaDaSemana < 1) {
    console.log('O dia da semana informado não é válido.')
}

// switch (diaDaSemana) {
//     case 1:
//         console.log('Segunda-feira')
//         break
//     case 2:
//         console.log('Terça-feira')
//         break
//     case 3:
//         console.log('Quarta-feira')
//         break
//     case 4:
//         console.log('Quinta-feira')
//         break
//     case 5:
//         console.log('Sexta-feira')
//         break
//     case 6:
//         console.log('Sábado')
//         break
//     case 7:
//         console.log('Domingo')
//         break
//     default:
//         console.log('O dia da semana informado não é válido.')
// }