const email = "joao@cubos.academy";


//validação de email

if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email[0] === '.' || email[email.length - 1] === '.') {
    console.log('E-mail inválido')
} else {
    console.log('E-mail válido')
}
