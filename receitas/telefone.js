const telefones = `
  Lista telefônica:
    - 99999999999
    - (99) 9999-999
    - 96666-6666
    - 99 9999-9999
    - 96666 6666
    -(99)9999-9999
    -(99)99999999
    -(9)9999-9999
    -(9) 9999-9999
    - 9999 9999
`

const regex = /(\(?\d{2}[\)\s]?)?\d{4,5}[- ]?\d{4}/g

console.log(telefones.match(regex))