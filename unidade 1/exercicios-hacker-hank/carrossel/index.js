function solucao(sequencia) {
	//seu codigo aqui
    resposta = 0
    for(seta of sequencia){
        if(seta === '>'){
            resposta ++
        }

        if(seta === '<'){
            resposta --
        } 

        if(resposta < 0){
            resposta = 6
        }

        if(resposta > 6){
            resposta = 0
        }
    }

    return resposta

}

console.log(solucao('>>>>>>>><<<'))

