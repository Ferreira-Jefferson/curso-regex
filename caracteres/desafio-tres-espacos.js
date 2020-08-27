// Desafio: Criar uma regex que identifique três espaços entre a letra a e b

const texto = 'a   b'

console.log(texto.match(/.\s\s\s./g))
console.log(texto.match(/a\s\s\sb/g))
console.log(texto.match(/a   b/g))


console.log('Regex avançada')
//Usando quantificadores
console.log(texto.match(/a {3}b/g))
console.log(texto.match(/a\s{3}b/g))
//Usando o quantificador + a busca não se restinge a apenas 3 ocorrências
console.log(texto.match(/a +b/g))
console.log(texto.match(/a\s+b/g))