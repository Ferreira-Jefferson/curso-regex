// + -> um ou mais
// Traz todas as ocorrências que correspondam ao caracter ou expressão anterior, sendo que a existir a ocorrência anterior é obrigatória por padrão

const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

// #Digítos

// Dígitos com 1 ou no máximo 2 caracteres em sequência
//  Note que o 120 é quebras em 12 e 0 pois as chaves sempre buscam o valor máximo primeiro e caso não ache, busca o menor.
console.log('\n\\d{1,2}: ', texto.match(/\d{1,2}/gi)) 

// Somente com 2 dígitos em sequência
console.log('\n\\[0-9]{2}: ', texto.match(/[0-9]{2}/gi))

// Com um ou mais dígitos em sequência
console.log('\n\\d{1,}: ', texto.match(/\d{1,}/gi))


// #Caracteres

// Palavras que atendam ao shorthand \w com exatamente 7 caratecteres
//  Note que a palavra 'milhões' não retorna pois o 'õ' não é suportado pelo \w
console.log('\n\\w{7}: ', texto.match(/\w{7}/gi))

// Palavras que atendam ao shorthand \w ou com 'õ' com exatamente 7 caratecteres
console.log('\n\\[\\wõ]{7}: ', texto.match(/[\wõ]{7}/gi))


// Palavras que atendam ao shorthand \w ou com 'õ' com 7 ou mais caratecteres
console.log('\n\\[\\wõ]{7,}: ', texto.match(/[\wõ]{7,}/gi))

