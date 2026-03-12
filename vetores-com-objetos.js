const { useActionState } = require("react")

// Exemplo com vetor de nomes:
const listaDeNomes = ["Ana", "Maria", "Joana"]

// exemplo com veto de numeros 
const numeros = [1,2,3,4,5]
    

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados como uma classe


const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade:35},
    {nome: "Joana", idade:45},
    {nome: "Jose", idade : 15}

]

// Percorrendo e exibindo os elementos do vetor.
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuarios do vetor.")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
})

// Como os Antigos
// console.log("\nExibindo todos os usuarios do vetor")
// for (let i = 0; i <=listaDeUsuarios.length; i++) {
//     console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos`)
// }

// FILTRANDO MAIORES DE 18 ANOS 
console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais uma linha 
maioridade.forEach(usuario => console.log(`${usuario.nome} tem ${usuario.idade} anos`)
)

// Filtrando menores de 18 anos
console.log("\nFiltrando menores de 18 anos")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade <= 18)
menoridade.forEach(usuario => console.log(`${usuario.nome} tem ${usuario.idade} anos`))


// Mostrando numeros Pares
console.log("\nFiltrando numeros pares")
const pares = numeros.filter(numeros => numeros % 2 === 0)
console.log("pares:", pares)

console.log("\nNa lista de usuario, Mostre apenas os nomes")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuario, encontre um usuario")
const usuarioEncotrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(usuarioEncotrado)
console.log(`Nome: ${usuarioEncotrado.nome} \nIdade: ${usuarioEncotrado.idade}`)

console.log("\nNa lista de usuario, encontre um usuario com a idade 45 anos")
const usuario45 = listaDeUsuariosPORIDADE.find(u=> u.idade === 45)
console.log(`Nome: ${listaD  esuariosPORIDADE.nome} \nIdade: ${listaDeUsuariosPORIDADE.idade}`)