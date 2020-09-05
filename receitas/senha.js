/**
 * Requisitos obrigatórios:
 *   - Letras maiúsculas
 *   - Letras minúsculas
 *   - Números
 *   - Simbolos
 *   - Mínimo 6 caracteres
 *   - Máximo 20 caracteres
 */

const texto = `
Inválidas:
1234
abcdef
fa43dD
#umas3nhaGr4ndeC0mTudo?

Válidas:
$curt4Eval1dA
#Opa1!
F@i123!
issA876!
`

console.log(texto.match(/^.{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@!#$%&^]).{6,20}$/gm))