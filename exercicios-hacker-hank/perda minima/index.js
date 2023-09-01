
function solucao(precos) {
    // seu codigo aqui
    let listaPerda = []
    
    for(let i = 0; i < precos.length; i++){
        for(let c = i; c < precos.length; c++){
            diferenca = precos[i] - precos[c]
            if(diferenca > 0){
                listaPerda.push(diferenca)
            }
        }
    }

    let perdaMinima = listaPerda[0]

    for(item of listaPerda){
        if(item < perdaMinima){
            perdaMinima = item
        }
    }

    return perdaMinima
    
  }

  console.log(solucao([30, 10, 54, 76, 1, 4, 35]))