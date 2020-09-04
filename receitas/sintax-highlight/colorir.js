const aplicarCor =  (txt, reg, cor) =>
  txt.replace(reg, `<span style="color: ${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigo-fonte-original.html')

const textoFinal = texto.replace(/Original/g, 'Final')

let code = textoFinal.match(/<code>[\s\S]*<\/code>/i)[0]

const regexAndColor = {
  strings:   [ /(\".*\")/g,  '#ce9178'],
  reservadas: [ /\b(package|public|class|static|if|else)\b/g,  '#d857cf' ],
  tipos: [ /\b(void| int)\b/g, '#1385e2' ],
  multilinha: [ /(\/\*[\s\S]*\*\/)/g, '#267703' ],
  comentarioInLine: [ /(\/\/.*)/g, '#267703']
} 

Object.values(regexAndColor).forEach(value => {
  code = aplicarCor(code, value[0], value[1])
})

const bodyWithHighlight = textoFinal.replace(codeRegex, code)
files.write('codigo-fonte-final.html', bodyWithHighlight)