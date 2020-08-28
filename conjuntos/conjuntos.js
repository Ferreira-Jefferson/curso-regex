// Conjuntos ou Classes de caracteres
// Os conjuntos funcionam como o | OR (OU)

const texto = '1,2,3,4,5,6,7,a.b c!d?e[f'

// Para definir conjuntos de usa o metacaracter []
const regexPares = /[02468]/g
console.log(texto.match(regexPares))


const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))