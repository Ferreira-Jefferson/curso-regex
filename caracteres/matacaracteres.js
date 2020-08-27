// Alguns: . ? * + - ^$ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

// scape \ => permite usar um caracter privado(metacaracter) como um caracter simples
// or | => metacaracter lógico "OU"
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))