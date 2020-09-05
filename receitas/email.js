const emails = `
  Os e-mails dos convidados são:
    - fulano@mail.com
    - fulano@mail.com.br
    - fulano.mail@mail.br
    - fulano_mail@maildaempresa.br
    - pos_mind_blown@xxx.com.us
    - pos_mind_blown@xxx.com.br.fix
`

// # Minha solução
const regex = /\S+@\w+\.\w{2,6}(\.\w{2})?/g
console.log(emails.match(regex))