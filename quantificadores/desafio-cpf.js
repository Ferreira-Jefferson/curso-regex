const cpfs = `
  CPF dos aprovados:
    - 123.456.789-00
    - 222.444.666-88
    - 999.666.333-11
`
// # Minha solução

// Retornar os cpfs como xxx.xxx.xxx-xx
const regexCpfFormatado =  /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
console.log(cpfs.match(regexCpfFormatado))

// Retornar apenas os 11 digítos do cpf xxxxxxxxxxx
// Não consegui fazer. #Descobrir como fazer e atualizar este arquivo.



// # Solução do instrutor

//  A única diferença foi no '-', eu coloquei '\' mas como não é um range válido ele se comporta apenas como '-' mesmo
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))