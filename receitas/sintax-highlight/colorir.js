const aplicarCor = (txt, reg, corHex) =>
  txt.replace(reg, `<span style="color: #${corHex}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigo-fonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let code = texto.match(codeRegex)[0]


// strings
code = aplicarCor(code, /(\".*\")/g, 'ce9178')

// palavras reservadas
code = aplicarCor(code, /\b(package|public|class|static|if|else)\b/g, 'd857cf')
  
// tipos
code = aplicarCor(code, /\b(void|int)\b/g, '1385e2')
  
// comentários de multiplas linhas
code = aplicarCor(code, /(\/\*[\s\S]*\*\/)/g, '267703')
  
// comentários de uma linha
code = aplicarCor(code, /(\/\/.*)/g, '267703')

const bodyWithHighlight = texto.replace(codeRegex, code)
files.write('codigo-fonte.html', bodyWithHighlight)