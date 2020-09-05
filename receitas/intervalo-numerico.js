const texto = '0 1 10 50 192 199 201 249 255 256 312 1010 1512'

const regex = /\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g
console.log(texto.match(regex))