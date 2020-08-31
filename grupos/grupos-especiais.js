const texto = 'João é calmo, mas no fervo fica nos nervos.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead => Olha para a frente

// Valores que atendam a condição e que sejam precedidos de ','
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))

// Valores que atendam a condição e que sejam precedidos de '.'
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

// Valores que comece qualquer valor, seguido de 'erv' e que termine com 'os'
console.log(texto.match(/.erv(?=os)/gi))


// Negative lookahead => olha para a frente e só retorna se for diferente
console.log(texto.match(/[\wÀ-ú]+(?!\,)/gi))

console.log(texto.match(/[\wÀ-ú]+(?!\.)/gi))

console.log(texto.match(/.erv(?!os)/gi))


// Como pode ser observado, o lookahead não trás os caracteres usados para comparação, para isso é necessário informar manualmente

// Pegando com '.'
console.log(texto.match(/.erv(?=os)../gi))

// Pegando com '\w'
console.log(texto.match(/.erv(?!os)\w/gi))