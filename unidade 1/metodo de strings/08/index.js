const cpf = "011.022.033-44";

cpfPurificado = cpf.replaceAll('.', '')
cpfPurificado = cpfPurificado.replaceAll('-', '')
cpfPurificado = cpfPurificado.replaceAll('/', '')

console.log(cpfPurificado)