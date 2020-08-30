const emails = `
  Os e-mails dos convidados são:
    - fulano@mail.com
    - fulano@mail.com.br
    - fulano.mail@mail.br
    - fulano_mail@maildaempresa.br
    - pos_mind_blown@xxx.com.br.fix
`

// # Minha solução
const regex = /[\w.]+@[\w.]+/g
console.log(emails.match(regex))


// # Solução do instrutor
// v1
console.log(emails.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
// v2
console.log(emails.match(/\w+@\w+\.\w{2,4}/g))
// v3
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}/g))
//v4
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))


// Só agora percebi que o objetivo final é criar uma regex que aceite apenas e-mails válidos, a regex que criei apesar de fazer o mesmo e ser mais elegante, torna a aceitação de textos inválidos como se fossem e-mails válidos.

// Pós mind blown
// Só se diferenciou da do instrutor no ultimo quantificador, acredito que {0,3} seja mais adequado
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,3}/g))