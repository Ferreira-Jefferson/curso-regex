/* Nos primórdios os caracteres possuiam 1 byte
*  Um byte (8 bits) - 256 caracteres
*  Simbolos, Pontuações, A-Z, a-z, 0-9  

*  A medida que o cumputador se popularizou eram necessários novos caracteres, então começaram a utilizar 2 bytes para representar os caracteres
*  Dois bytes (16 bits) - 65500+ caracteres
*  +Simbolos, +Pontuações, A-Z, a-z, 0-9 

*  Chegou um ponto em que o computador estava em todos os continentes e 2 bytes já não eram suficientes para suportar todos os caracteres existentes. Diante disso foi criada a tabela Unicode que utiliza 4 bytes e é expansível
*  Quantidade de bytes variável - Expansível
*  Suporta mais de 1 milhão de caracteres
*  Atualmente possui mais de 100.000 caracteres atribuídos

*  https://unicode-table.com/pt/
*/

const texto = 'a ʬ b ௵ c'

console.log(texto.match(/ʬ|௵/g))
console.log(texto.match(/../g))

// \u => flag especial para tratar unicode de forma simplificada...ou não kkk
console.log(texto.match(/\u02AC|\u0BF5/g))