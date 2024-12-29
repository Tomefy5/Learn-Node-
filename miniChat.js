var fs = require('fs');
const { stdout } = require('process');
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout)
var pseudo
var stream

function addToStream() {
    var question = "Nom du chat ? > "

    if(stream) {
        question = `${pseudo} : `
    }

    rl.question(question, data => {
        if(!stream) {
            stream = fs.createWriteStream(`${data}.txt`)
            pseudo = data
        } else {
            stream.write(`${pseudo} : ${data}\n`)
        }

        addToStream()
    })
}

addToStream()