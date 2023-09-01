const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somarPares = 0;

for (numero of numeros) {
    if (numero % 2 == 0) {
        somarPares += numero
    }
}

console.log(somarPares)