const texto = `
ca	r
r		o s!
`
/**
 * \t: tab
 * \n: quebra de linha
 * \s: espaçoes em branco...mas também pode substituir o \t e o \n
*/
console.log(texto.match(/ca\tr\nr\t\to\ss!/))