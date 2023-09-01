function solucao(resultados) {
	//seu codigo aqui
    let pontos = 0;

    for(resultado of resultados){
        if(resultado === 'V'){
            pontos += 3
        }

        if(resultado === 'E'){
            pontos += 1
        }

        if(resultado === 'D'){
            pontos += 0
        }
    }

    return pontos

}

console.log(solucao([ "V", "E", "V", "E", "D"]))