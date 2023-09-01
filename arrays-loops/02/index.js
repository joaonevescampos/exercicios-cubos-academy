const letras = ["A", "a", "B", "C", "Z", "z"];

let contador = 0;

for (letra of letras) {
    if (letra === "E" || letra === "e") {
        contador++
    }
}

if (contador > 0) {
    console.log(`Foram encontradas ${contador} letras "E" ou "e"`)
}else{
    console.log(`Nenhuma letras "E" ou "e" foi encontrada`)
}

