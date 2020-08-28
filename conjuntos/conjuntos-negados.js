const texto = '1,2,3,a.b c!d?e[f'

// Tudo que for diferente de dígitos
console.log(texto.match(/\D/g))
console.log(texto.match(/[^\d]/g))
console.log(texto.match(/[^0-9]/g))

// Somente letras
console.log('\n', texto.match(/[^\d!?\[\s,.]/g))

// Somente digítos
const texto2 = '1: !"#$%&\'()*+,-./ 2: ;<=>?@'
console.log('\n', texto2.match(/[^!-/:-@\s]/g)) //note que os - são um ranges 