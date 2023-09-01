
function solucao(palpite, palavra) {
	// seu codigo aqui
    let acertos = 0;

    for(let letra of palavra){
        if(letra === palpite){
            acertos ++
        }
    }

    return acertos
}

console.log(solucao('a', 'olho'))
