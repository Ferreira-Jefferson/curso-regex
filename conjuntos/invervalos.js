const texto = 'A,B#G.1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[a-d]/g))
console.log(texto.match(/[A-Z]/g))
console.log(texto.match(/[A-B]/g))

console.log(texto.match(/[0-9]/g))
console.log(texto.match(/[3-5]/g))

console.log(texto.match(/[A-z]/g))
console.log(texto.match(/[A-Za-z1-3]/g))

console.log(texto.match(/[a-z]/gi))
console.log(texto.match(/[A-Z]/gi))
console.log(texto.match(/[A-C2-5]/gi))