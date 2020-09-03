// Bordas são não \w = [^A-Za-z0-9_], isso significa que tudo que dá match com não \w são consideradas bordas

// Frase com caracteres \w válidos
const texto = 'dia diaton1co diafragma media w1kipedia bom_dia melodia radial'

// Palavras que iniciam com 'dia'
console.log(texto.match(/\bdia\w+/gi))

// Palavras que terminam com 'dia'
console.log(texto.match(/\w+dia\b/gi))

// Palavras com 'dia' no meio
console.log(texto.match(/\w+dia\w+/gi))

// Apenas a palavra 'dia'
console.log(texto.match(/\bdia\b/gi))


// Bordas com caracteres não \w
const texto2 = 'dia, diatônico, diafragma, média, wikipédia, bom-dia, melodia, radial'

// Retorna 'dia' de [dia, diatônico, média, wikipédia], pois acentos e vírgula são consideradas bordas
console.log(texto2.match(/\bdia\b/gi))

// Mas sabendo dessa limitação, como é possível dar match em todas as palavras que tenham 'dia', mesmo se ela tiver acentos?
// Uma solução seria indicar que antes de 'dia' PODE ter algum caracter diferente de espaço, ou seja, \w, acentos, traços e outros...mas note que a vírgula ainda persiste
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))

console.log('ESSE', texto2.match(/(\S*)?dia(\S*)?/gi)) 

// Por fim uma melhor solução seria a aplicada logo abaixo em que é infomado manualmente o que se espera, como \w, a sequência unicode de acentos de À-ú e o hífen...sendo que eles podem existir ou não (*)
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))