var path = require('path')
var util = require('util')

console.log(path.basename(__filename)) 
// module.js
console.log(path.join(__dirname, "www", "tomefy", "portfolio"))

var message = util.format("%s : %s", "Le dossier est ", __dirname)
console.log(message)

