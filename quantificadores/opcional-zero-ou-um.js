// ? -> zero ou um (opcional)
// Ele não diz que toda sentença é opcional, mas sim que o caracter/expressão anterior pode existir ou não

const texto = 'Não se afogue com fogo. FOGOOO?'

const regex = /fogo?/gi
console.log(texto.match(regex)) // traz 'fog' de afogue, 'fogo' e 'FOGO' de FOGOOO


const texto2 = '12 1234 1245 1256 1267'

console.log('Sem ?', texto2.match(/12[4-6]/g))
console.log('Com ?', texto2.match(/12[4-6]?/g))