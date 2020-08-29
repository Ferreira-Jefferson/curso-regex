const telefones = `
  Lista telefônica:
    - (99) 9999-999
    - 96666-6666
    - 99 9999-9999
    - 96666 6666
    -(99)9999-9999
`

// # Minha solução
const regex = /\(?\d.+/g  
console.log(telefones.match(regex))


// # Solução do instrutor
//  Para minha lista telefônica de teste esta regex falha miserávelmente
console.log(telefones.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))