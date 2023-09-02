const cpf = "12345678900";
const cnpj = "12345678900125";

let cpfFormatado = ''
let cnpjFormatado = ''

// Formatação de CPF
if (cpf.length !== 11) {
    console.log('CPF inválido.')
} else {
    for (numero of cpf) {
        cpfFormatado += numero
        if (cpfFormatado.length === 3 || cpfFormatado.length === 7) {
            cpfFormatado += '.'
        }
        if (cpfFormatado.length === 11) {
            cpfFormatado += '-'
        }
    }
    console.log(cpfFormatado)
}

//Formatação de CNPJ
if (cnpj.length !== 14) {
    console.log('CNPJ inválido.')
} else {
    for (numero of cnpj) {
        cnpjFormatado += numero
        if (cnpjFormatado.length === 2 || cnpjFormatado.length === 6) {
            cnpjFormatado += '.'
        }
        if (cnpjFormatado.length === 10) {
            cnpjFormatado += '/'
        }
        if(cnpjFormatado.length === 15){
            cnpjFormatado += '-'
        }
    }
    console.log(cnpjFormatado)
}