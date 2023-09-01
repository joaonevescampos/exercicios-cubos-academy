const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i = 0; i < usuarios.length; i++) {
    const { nome, pets } = usuarios[i]

    if (pets.length > 1) {
        console.log(`Sou ${nome} e tenho ${pets.length} pets `)
    } else if (pets.length === 1) {
        console.log(`Sou ${nome} e tenho ${pets.length} pet`)
    } else {
        console.log(`Sou ${nome} e não tenho pets`)
    }
}


