const nomeArquivo = 'Foto da Familia.jpeg';

const extensao = nomeArquivo.slice(-3)

if (extensao === 'jpg' || nomeArquivo.slice(-4) === 'jpeg' || extensao === 'gif' || extensao === 'png') {
    console.log('Arquivo válido')
} else {
    console.log('Arquivo inválido')
}