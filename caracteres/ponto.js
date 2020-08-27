/* . é um coringa, válido para uma posição, ou seja, assume que onde o .(ponto) foi definido HÁ um caracter qualquer. 
* Obs: existem excessões: \n
*/

const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log(texto.match(/1.2/g))
console.log(texto.match(/1...3/g))

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))