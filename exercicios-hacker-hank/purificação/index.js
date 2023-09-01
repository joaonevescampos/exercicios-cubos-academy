 function solucao(stringCorrompida) {
        // seu codigo aqui
        
        const corrompimento = '!@#$%&*()'
        let stringPurificada = ''

        for(let c = 0; c < stringCorrompida.length; c++){
            for(let i = 0; i < corrompimento.length; i++){
                if(corrompimento[i] === stringCorrompida[c]){
                    c++ 
                    break
                }
            
            }

            if(c < stringCorrompida.length){
                stringPurificada += stringCorrompida[c]
            }
        }

        return stringPurificada
 }
console.log(solucao('*Canis %lupus )familiaris'))

