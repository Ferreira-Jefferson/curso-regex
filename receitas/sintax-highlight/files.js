const fs = require('fs')

const read = file => fs.readFileSync(`${__dirname}\\${file}`, { encoding: 'utf8' })

const write = (file, body) => {
  const dirname = __dirname
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }
  fs.writeFileSync(`${dirname}\\${file}`, body, { encoding: 'utf8'})
}

module.exports = { read, write}