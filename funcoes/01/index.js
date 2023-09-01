const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

const {aluno, materia, valor, questoes} = prova

function corrigirProva(prova){
    let acertos = 0;
    let nota = 0;
    for(let i = 0; i < questoes.length; i++){
        if(questoes[i].resposta === questoes[i].correta){
            acertos ++
        }
    }

    nota = acertos * 2

    return `O aluno(a) ${aluno} acertou ${acertos} questões e obteve nota ${nota}`

}

console.log(corrigirProva(prova))

