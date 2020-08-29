// Por padrão os quantificadores, com exceção do ? são gulosos(greedy), ou seja, buscam o máximo  de valores que atendam a expressão.
// Este padrão pode ser interrompido colocando o ? após o quantificador, neste caso o quantificador deixa de ser greedy e passa a ser um quantificador lazy, ou seja que interrompe a busca quando achar a primeira ocorrência que atenda a expressão.

const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'


// O curinga '.' representa um caracter qualquer

// Quantificadores gulosos (greedy)
//  Note que o texto inteiro é retornado
console.log('\n+', texto.match(/<div>.+<\/div>/g))
console.log('\n*', texto.match(/<div>.*<\/div>/g))
console.log('\n{}', texto.match(/<div>.{0,}<\/div>/g))


// Quantificadores não gulosos (lazy)
//  Note que após a primeira ocorrência a busca é interrompida e como está com a flag 'g' e o texto não chegou ao fim, é iniciada uma nova busca, encontrando assim a segunda ocorrência que atenda à expressão
console.log('\n+?', texto.match(/<div>.+?<\/div>/g))
console.log('\n*?', texto.match(/<div>.*?<\/div>/g))
console.log('\n{}?', texto.match(/<div>.{0,}?<\/div>/g))