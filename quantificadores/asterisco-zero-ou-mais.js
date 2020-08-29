// * -> zero ou mais
// Traz todas as ocorrências que correspondam ao caracter ou expressão anterior, sendo que não é necessária a existir do caracter ou expressão anterior

const texto = 'Não se afogue com fogo. FOGOOO?'

const regex = /fogo*/gi
console.log(texto.match(regex))