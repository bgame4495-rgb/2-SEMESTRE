// NOVOS RECURSOS ES6

// VEOTR DE NUMEROS
const listadenumeros = [1,2,3,4,5]

console.log("Exibindo numeros do vetor:")
console.log(listadenumeros)

console.log("\nMultiplicando numeros de vetor: ")
const dobrados = listadenumeros.map(n => n * 2)
console.log(dobrados)

console.log("\nFiltrar numeros pares do vetor")
const pares = listadenumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("\nSomando todos os numeros do vetor")
const soma = listadenumeros.reduce((soma, atual) => soma + atual,  0)
console.log(soma)
