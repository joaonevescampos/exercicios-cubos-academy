
function solucao(disparos) {
    //seu codigo aqui
    let pontos = 0;
    for (ponto of disparos) {
        if (ponto >= 70) {
            pontos++
        }
    }

    if (pontos < 3) {
        console.log('ELIMINADO')
    } else {
        console.log(pontos)
    }

}

console.log(solucao([0, 10, 50, 70, 80, 30]))