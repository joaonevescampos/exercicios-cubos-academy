const celular = '7199918888';
let celularFormatado = ''

if (celular.length === 9) {
    celularFormatado = celular.slice(0, 1)
    celularFormatado += " "
    celularFormatado += celular.slice(1)

} else if (celular.length === 10) {
    celularFormatado += '('
    celularFormatado += celular.slice(0, 2)
    celularFormatado += ')'
    celularFormatado += " "
    celularFormatado += '9'
    celularFormatado += ' '
    celularFormatado += celular.slice(-8)
} else {
    console.log('Não é possível formatar este número. ')
}

console.log(celularFormatado)
