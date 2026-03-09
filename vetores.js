// Vetores 

const listadenomes = ["MARTA, JOSE, MARIA"]

console.log("Exibindo todos os elemento: ")
console.log(listadenomes)

console.log("\nExibindo apenas o primeiro elemento")
console.log(listadenomes[0])

console.log("\nAdicionando um elemento")
listadenomes.push("Marilia")
console.log(listadenomes)


console.log("\nAdicionando mais um nome")
listadenomes.push("Marcia")
console.log(listadenomes)


console.log("\nRemovendo um elemnto")
//  A partir do indice 2, remover 1 apenas elemento
listadenomes.splice(2,2)
console.log(listadenomes)

console.log("\nRemovendo o ultimo elemnto")
listadenomes.pop()
console.log(listadenomes)

console.log("\nRemovendo apenas o primeiro elemtenot: ")
listadenomes.shift()
console.log(listadenomes)
