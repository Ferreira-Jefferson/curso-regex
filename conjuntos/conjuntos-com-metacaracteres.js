/* Alguns metacaracteres funcionam como caracter simples quando dentro de um conjunto[], dentro de um conjunto[] é necessário utilizar scape para eles se comportarem como metacaracteres especiais
* Metacaracteres que continuam especiais e precisam de scape para ser entendido como caracter simples:
  * - (range): De acordo com a posição; se entre dois caracteres simples se comporta como o metacaracter, se no início ou final de uma sentença, se comporta como caracter simples
  * ^ (negado): Quando no início do conjunto[], nega/exclui/ignora  a sentença seguinte, seja ela um caracter ou um range
  * ] (barra de fechamento do conjunto)
*/

const texto = ' \.$+*?-^[]'

console.log('.')
console.log(texto.match(/[+.?*$]/g))
console.log(texto.match(/[+.?*$]./g))

// - (range)
console.log('-')
console.log(texto.match(/[-+?*$]/g))
console.log(texto.match(/[+?*$-]/g))
console.log(texto.match(/[+-?*$]/g))

// ^
console.log('^')
console.log(texto.match(/[+?*$^]/g))
console.log(texto.match(/[+?*^$]/g))
console.log(texto.match(/[^+?*$]/g)) // Note que todos os caracteres declarados após o ^ foram ignorados

// []
console.log('[]')
console.log(texto.match(/[\]+?*^$[]/g))
console.log(texto.match(/[+?*^$\]]/g))

