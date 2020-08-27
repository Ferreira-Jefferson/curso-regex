const textoUmaLinha = '...' // aspas simples ou duplas

const textomultiplasLinhas = `
  linha 1
  linha 2
`

//cuidado com o tab, dependendo da configuração da IDE o tab pode ser retornado como espaços
console.log('Antes de ajustar a IDE', ' '.match(/\s/g))
console.log('Após ajustar a IDE', '	'.match(/\s/g))