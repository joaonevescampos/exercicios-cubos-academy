
function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui

let contador = 0;

    for(let palavra of palavras){
    
        if(palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
            console.log(palavra)
        }
    }

}

console.log(solucao('a', 'v', [ "aveia", "manha", "ave"]))