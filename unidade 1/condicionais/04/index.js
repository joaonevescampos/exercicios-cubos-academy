const ladoA = 3, ladoB = 3
const valores = [0, 1, 2, 3, 4, 5, 6]
const nomes = ['branco', 'às', 'duque', 'terno', 'quadra', 'quina', 'sena']

if (ladoA === ladoB) {
    for (let i of valores) {
        if (ladoA === i) {
            console.log(`Bucha de ${nomes[i]}`)
        }
    }
} else {
    console.log("NÃO")
}