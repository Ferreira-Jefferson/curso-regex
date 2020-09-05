const texto = `
Inválidos:
  - 192.256.0.543
  - 395.236.98.123
  - 0.2.264.231

Válidos:
  - 0.0.0.0
  - 192.255.0.143
  - 95.236.98.123
  - 100.2.24.231
  - 255.255.255.255
`

const range = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])'
const ipv4 = RegExp(`\\b${range}\\.${range}\\.${range}\\.${range}\\b`, 'g')

console.log(texto.match(ipv4))