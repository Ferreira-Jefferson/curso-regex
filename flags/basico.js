/**
 * @description Flags são argumentos que definem o os limites de busca da regex
 * @parameters [, g, i, m, s]
 */

const texto_simples = '#Não paRE de parar de f1car parado na parada aparentE!'
const texto_duas_linhas = `linha um
linha dois`

// Identifica a primeira ocorrência
const regex_sem_flag = /para/
console.log(texto_simples.match(regex_sem_flag))


// Identifica todas as ocorrência estritamente iguais (case sensitive)
const regex_com_flag_g = /para/g
console.log(texto_simples.match(regex_com_flag_g))
  
  
// Identifica a primeira ocorrência (case insensitive)
const regex_com_flag_i = /para/i
console.log(texto_simples.match(regex_com_flag_i))
  

// Identifica a primeira ocorrência em distintas linhas
const regex_com_flag_m = /dois/m
console.log(texto_duas_linhas.match(regex_com_flag_m))


// Indica um espaço após o que está sendo buscado pela regex
const regex_com_flag_s = /a\s/
console.log(texto_simples.match(regex_com_flag_s))

/**
 * @joint As flags podem ser usadas em conjunto, aumentando assim seu poder
 */

// Buscar todas as ocorrências, considerando letras maiúsculas e minúsculas que tenham um espaço na frente
const regex_combinando_g_i_s = /e\s/gi
console.log(texto_simples.match(regex_combinando_g_i_s))