const texto = 'àèìòù áéíóú  âêîôû ãõ äëïöü ç'

console.log(texto.match(/[à-ü]/g))
console.log(texto.match(/[à-ä]/g))
console.log(texto.match(/[è-ë]/g))
console.log(texto.match(/[ì-ï]/g))
console.log(texto.match(/[ò-ö]/g))
console.log(texto.match(/[ù-ü]/g))