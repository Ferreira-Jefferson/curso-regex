/* Alguns metacaracteres funcionam como caracter simples quando dentro de um conjunto[], dentro de um conjunto[] é necessário utilizar scape para eles se comportarem como metacaracteres especiais
* Metacaracteres que continuam especiais e precisam de scape para ser entendido como caracter simples:
  * - (range): De acordo com a posição; se entre dois caracteres simples se comporta como o metacaracter, se no início ou final de uma sentença, se comporta como caracter simples
  * ^ (acento circunflexo) 
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
console.log(texto.match(/[^+?*$]/g))
console.log(texto.match(/[+?*$^]/g))
console.log(texto.match(/[+?*^$]/g))

// ^
console.log('[]')
console.log(texto.match(/[\]+?*^$[]/g))
console.log(texto.match(/[+?*^$\]]/g))

