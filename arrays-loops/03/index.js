const numeros = [54, 22, 14, 87, 284];

//console.log(numeros.indexOf(10))

//outra forma de fazer
let tem10 = false;
for(numero of numeros){
    if(numero === 10){
        console.log(numeros.indexOf(10))
        tem10 = true
        break
    }
}

if(!tem10){
    console.log("-1")
}

