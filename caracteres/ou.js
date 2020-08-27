const texto = 'Você precisa responder sim, não ou não sei!'

console.log(texto.match(/sim|não|não sei/g))
console.log(texto.match(/sim|não|sei/g))
console.log(texto.match(/sim|n.o|sei/g))