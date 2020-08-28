// Shorthands são formas simplificadas para a definição de um range

const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g\r\f`

console.log('\n \\d \\D')
console.log(texto.match(/\d/g)) // [0-9]
console.log(texto.match(/\D/g)) // [^\d]

console.log('\n \\w \\W')
console.log(texto.match(/\w/g)) // [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // [^\w]

console.log('\n \\s \\S')
console.log(texto.match(/\s/g)) // [ \n\t\r\f]
console.log(texto.match(/\S/g)) // [^\s]