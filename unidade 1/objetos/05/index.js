const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const nomes_das_aulas = ['Introdução a progrmação', 'Variáveis', 'Condicionais', 'Arrays']

for (let i = 0; i < nomes_das_aulas.length; i++) {
    curso.aulas[i] = {
        identificador: i + 1,
        nome_da_aula: nomes_das_aulas[i]
    };
}

console.log(curso)