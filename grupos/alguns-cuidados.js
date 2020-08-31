const texto = 'Pedrinho do (abc) trabalha na ABC'

// Não confunda grupos com conjuntos
console.log('()',texto.match(/(abc)/gi))
console.log('[]',texto.match(/[abc]/gi))


// Não existe grupo dentro de conjunto
console.log('[()]',texto.match(/[(abc)]/gi))

// Mas o contrário é possível, no caso, existe conjunto dentro de um grupo 
console.log('([])',texto.match(/([abc])/gi))