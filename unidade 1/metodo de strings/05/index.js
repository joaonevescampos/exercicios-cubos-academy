const numeroCartao = '1111222233334444';

let numeroOculto = ''

numeroOculto = numeroCartao.slice(0, 4)
numeroOculto = numeroOculto.padEnd(12, '*')
numeroOculto += numeroCartao.slice(-4)

console.log(numeroOculto)