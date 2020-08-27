// Problema: O coringa .(ponto) não cobre o \n
// Solução: Para identificar o \n ao usar o coringa . é necessário utilizar a flag \s

const texto_n = 'Bom\ndia'
const texto_t = 'Bom\tdia'

// Busca três caracteres em seguida
console.log(texto_n.match(/.../gi))
console.log(texto_t.match(/.../gi))

// Busca quatro caracteres em seguida
console.log(texto_n.match(/..../gi))
console.log(texto_t.match(/..../gi))

// Solução
console.log(texto_n.match(/..../gis))