const nomes = ["Ana", "Joana", "Carlos", "amanda", 'Roger', 'Alessandra', 'Bia'];
let nomesComA = [];

for(nome of nomes){
    for(let letra of nome){
        if((letra === "a" || letra === "A") && nome.indexOf(letra) === 0){
            nomesComA.push(nome)
            break
        } 
    }
}

console.log(nomesComA)
