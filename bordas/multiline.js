// Há momentos em que utilizar [\s\S] não resolve nosso problema, então se torna necessário apelar pela flag 'm'

const texto = `
Frases que comecem e terminem com a mesma letra:
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).*\1$/gi))
console.log(texto.match(/^(\w)[\s\S]*\1$/gi))

// Pegar todas as palavras que terminem com a mesma letra do início da string
console.log(texto.match(/^(\w).*\1$/gim))

// Pegar todas as frases tornando o retrovisor opcional '\1?'
console.log(texto.match(/^(\w).*\1?$/gim))