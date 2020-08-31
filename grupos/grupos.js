// OS grupos definem uma sequência esperada, pode ser entendido como o && AND

const texto = 'Ele é muito engraçado hehehehehe'
console.log(texto.match(/(he)/g))
console.log(texto.match(/(he)+/g))


const texto2 = 'http://www.site.info www.site.com site.com.br site.br'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))