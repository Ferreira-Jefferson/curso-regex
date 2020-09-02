// Bordas são as extremidades de uma sentença, início ou fim de uma string ou do retorno de uma expressão

const texto = 'O dia já se foi, amanhã começa outro\n ...denovo'

console.log(texto.match(/o/gi))
console.log(texto.match(/^o/gi)) // O '^' fora de um conjunto[] significa ínicio 
console.log(texto.match(/o$/gi)) // O '$' significa final

// E para pegar uma string que comece com 'O' e termine também com 'o' ?
//    Note que este comando retorna null, isto ocorre pois o curinga '.' não resolve o \n ...este é o famigerado problema do dotall
console.log(texto.match(/^O.*o$/gi)) // Dotall

// Solução: usar o \s...só para lembrar, o \S dá metch em tudo que não seja \s
console.log(texto.match(/^O[\s\S]*o$/gi))