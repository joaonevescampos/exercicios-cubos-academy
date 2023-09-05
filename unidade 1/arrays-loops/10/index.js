const numeros = [7, 61, 54, 22, 5, 12]
let menor = maior = 0;

for (numero of numeros) {
    if (numeros.indexOf(numero) === 0) {
        menor = numero;
        maior = numero;
    } else {
        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    }
}

maiorDiferenca = maior - menor

console.log(maiorDiferenca)