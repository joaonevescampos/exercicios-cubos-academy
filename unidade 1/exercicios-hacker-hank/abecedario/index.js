function solucao(letra, palavras) {
	//seu codigo aqui
    let contador = 0;
    for(palavra of palavras){
        if(palavra[0] != letra){
            contador ++
        }
    }

    return contador
    
}

console.log(solucao('m', ['melancia'
, 'melão', 'maçã', 'laranja', 'limão']))