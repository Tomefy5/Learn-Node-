var fs = require('fs')

//Synchrone
// var files = fs.readdirSync('./')

// console.log(files);

//Async

fs.readdir('./', (err, files) => {
    if(err) throw err
    console.log(files)
})

console.log('Bonjour')
