var fs = require('fs')

// fs.renameSync('text', 'lib/text') // deplacer avec rename ou renameSync

try {
    var dir = './lib'

fs.readdirSync(dir).forEach((filename) => {
    var file = `${dir}/${filename}`
    fs.unlinkSync(file)
})

fs.rmdirSync(dir)
} catch (e) {
    console.log(e.path)
}