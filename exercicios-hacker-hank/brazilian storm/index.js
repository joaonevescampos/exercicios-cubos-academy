function solucao(notas) {
	//seu codigo aqui

    let maior = notas[0]
    let menor = maior
    let soma = 0

    for(nota of notas){

        if(nota < menor){
            menor = nota
        }

        if(nota > maior){
            maior = nota
        }
    }

    
    indiceMaior = notas.indexOf(maior)
    notas.splice(indiceMaior, 1)
    indiceMenor = notas.indexOf(menor)
    notas.splice(indiceMenor, 1)

    for(nota of notas){
        soma += nota
    }

    media = soma / notas.length

    return media 
}

console.log(solucao([100, 100, 100, 50]))