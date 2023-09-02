let identificador = "123";
let nome = "José silva costa JEan";
let email = "      jose@email.com   ";

const identificadorFormatado = identificador.padStart(6, '0')

let nomeFormatado = ''
nomeArray = nome.toLowerCase().split(' ')

for (cadaNome of nomeArray) {
    for (letra of cadaNome) {
        if (cadaNome.indexOf(letra) === 0) {
            nomeFormatado += ' '
            nomeFormatado += letra.toUpperCase()
        } else {
            nomeFormatado += letra
        }
    }
}

emailFormatado = email.trim()

console.log(identificadorFormatado)
console.log(nomeFormatado)
console.log(emailFormatado)