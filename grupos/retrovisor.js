// Quando usamos grupos, os valores internos são reservados e podem ser usados depois, são os chamados retrovisores. Para utilizá-los usace o \ + a ordem do, ex: \1 trás os dados que o primeiro grupo reservou.
// É possível indicar ao grupo que não reserve nenhuma informação, utilizando o ?: no início do grupo (?:Conteúdo esperado)

const texto = '<b>Conteúdo b</b><strong>Conteúdo strong</strong><div>Conteúdo div</div>'

console.log('Sem:', texto.match(/<(\w+)>.*?<(\/\w+)>/g)) //Sem retrovisor

//Como só tem um grupo e é dele que recuperarei os dados reservados, o retrovisor deve ser referenciar com \1
console.log('Com:', texto.match(/<(\w+)>.*<\/\1>/g)) //Com retrovisor


const texto2 = 'Lentamente, sua mente é muito lenta. Fim!'

// Nesta próxima sequência de exercícios, é possível acessar dois retrovisores distintos 
console.log()
console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente).*\1/gi))
console.log(texto2.match(/(lenta)(mente).*\2/gi))
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))
console.log(texto2.match(/(lenta)(mente).*\2.*\2/gi))
console.log(texto2.match(/(lenta)(mente).*\1.*/gi))

// Não reservar nenhum valor (?:)
console.log('\n(?:)')
console.log(texto2.match(/(?:lenta)(mente)/gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))
console.log(texto2.match(/(?:lenta)(mente).*\2/gi))

// Tornando o grupo opcional
console.log()
console.log(texto2.match(/(lenta)?(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))

// Usando os retrovisores para substituir textos com replace
console.log()
// /(lenta)(mente)/gi retorna 'Lentamente', a sentença então diz, pegue o retorno da regex (Lentamente) e substitua pelo que foi reservado pelo segundo grupo (mente)
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

// É possível personalizar o retorno junto ao retrovisor
console.log(texto2.replace(/(lenta)(mente)/gi, '123$2456'))
// O $ pode ser utilizado na personalização apenas em não retrovisores
console.log(texto2.replace(/(lenta)(mente)/gi, '12$3$2$456'))
// O $ não pode ser utilizado imediatamente antes de um $ de retrovisor válido
console.log(texto2.replace(/(lenta)(mente)/gi, '123$$2456'))
console.log(texto2.replace(/(lenta)(mente)/gi, '123\$$2456'))
console.log(texto2.replace(/(lenta)(mente)/gi, '123$\$2456'))
console.log(texto2.replace(/(lenta)(mente)/gi, '123\$\$2456'))


// As documentações geralmente utilizam explos de retrovisores de 1 a 9, mas será que é possível recuperar grpos com duas casas decimais?

// 14 grupos para o teste
const texto3 = 'abcdefghijkkllmn teste';
// O + é para indicar que o caracter da posição é similar ao grupo anterir
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)+(l)+(m)(n)/g))
// k = retrovisor \11     l = retrovisor \12
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)\11(l)\12(m)(n)/g))

// Substituindo valores com retrovisores de 2 digítos
console.log(texto3.replace(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)\11(l)\12(m)(n)/g, '$13$1$14$1$4$1'))