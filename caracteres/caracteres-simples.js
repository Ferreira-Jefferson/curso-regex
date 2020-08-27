const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
console.log( texto.split(regex_virgula) )
console.log( texto.match(regex_virgula) )

console.log( texto.match(/,/g) )
console.log( texto.match(/A/g) )
console.log( texto.match(/A/gi) )
console.log( texto.match(/2/) )
console.log( texto.match(/b c!d/) )
