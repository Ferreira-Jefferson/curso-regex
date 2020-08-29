// + -> um ou mais
// Traz todas as ocorrências que correspondam ao caracter ou expressão anterior, sendo que a existir a ocorrência anterior é obrigatória por padrão

const texto = 'Não se afogue com fogo. FOGOOO?'

const regex = /fogo+/gi
console.log(texto.match(regex)) // não traz 'fog' de afogue

const numeros = 'números: 0123456789'
console.log('Sem +', numeros.match(/[0-9]/g))
console.log('Com +', numeros.match(/[0-9]+/g))
console.log('Com +', numeros.match(/\d+/g))