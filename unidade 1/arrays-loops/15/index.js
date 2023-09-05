const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//Opção 1

for (numero of original) {
    if (numero % 2 == 0) {
        pares.push(numero)
    } else {
        impares.push(numero)
    }
}

//Opção 2

// let i = 0;

// while (i < original.length) {
//     if (original[i] % 2 == 0) {
//         pares.push(original[i])
//     } else {
//         impares.push(original[i])
//     }

//     i++
// }

//Opção 3

// for(let i = 0; i < original.length; i++){
//     if(original[i] % 2 == 0){
//         pares.push(original[i])
//     }else{
//         impares.push(original[i])
//     }
// }


console.log(pares)
console.log(impares)


