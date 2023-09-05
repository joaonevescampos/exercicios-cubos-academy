const caractere = "E";
const vogaisMinusculas = ['a', 'e', 'i','o', 'u']
const vogaisMaiusculas = ['A', 'E', 'I','O', 'U']
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for(let v of vogaisMinusculas){
    if(v === caractere){
        console.log('vogal minúscula')
    }
}

for(let v of vogaisMaiusculas){
    if(v === caractere){
        console.log('vogal maiúscula')
    }
}

for(let n of numeros){
    if(n === caractere){
        console.log('número')
    }
}


