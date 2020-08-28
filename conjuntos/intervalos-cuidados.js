const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/a-c/g)) // Não é um range pois não está dentro do conjunto[]

console.log(texto.match(/[a-c]/g)) // Range válido

console.log(texto.match(/[a-zA-Z]/g)) // Letras maiúsculas e minúsculas

console.log(texto.match(/[A-z]/g))  // Range de caracteres entre o A e o z na tabela ASCII ou UNICODE (é importante notar que neste range há também outras caracteres diferente de letras, como o [ e o ] do texto exemplo)

// console.log(texto.match(/[a-Z]/g)) //Comando inválido, pois deve segir a ordem da tabela ASCII ou UNICODE
console.log(texto.match(/[Z-a]/g)) // Range válido