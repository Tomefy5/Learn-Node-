function collect(arg) {
    var key = process.argv.indexOf(arg)

    return key === -1 ? null : process.argv[key+1]
}

var name = collect("--name")
var message = collect("--message")

if(name && message) {
    return console.log(`${name} : ${message}`)
}

console.log("Message manquant")


